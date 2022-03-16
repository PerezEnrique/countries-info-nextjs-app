import { useState, useRef, useEffect, KeyboardEventHandler, MouseEventHandler } from "react";
import {v4 as uuidv4} from "uuid";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

type FilterProps = {
    items: string[]
    selectedItem: string
    handleSelection: (selected: string) => void
    criterion: string
}

export default function Filter({ items, selectedItem, handleSelection, criterion }: FilterProps) {
	const [showOptions, setShowOptions] = useState(false);
	const filter = useRef<HTMLDivElement>(null);
	const filterDropdown = useRef<HTMLButtonElement>(null);
	const itemToFocus = useRef<HTMLLIElement>(null);

	const handleClick: MouseEventHandler<HTMLButtonElement | HTMLLIElement> = (e) => {
        handleSelection((e.target as HTMLElement).id);
		setShowOptions(false);
	};

	const handleKeyDown: KeyboardEventHandler<HTMLButtonElement | HTMLLIElement> = (e) => {
		const eventTarget = e.target as HTMLElement;
		const buttonHasFocus = eventTarget.tagName === "BUTTON";
		const optionHasFocus = eventTarget.getAttribute("role") === "option";

		if (buttonHasFocus) {
			//When focus is on button
			switch (e.code) {
				case "ArrowDown":
				case "ArrowUp":
					//if user press arrow down or arrow up, it opens the listbox
					setShowOptions(true);
					break;
				default:
					break;
			}
		} else if (optionHasFocus) {
			//When focus is on an item
			switch (e.code) {
				case "ArrowDown":
					// if user press arrow down, it moves focus to and selects the next option.
					if (!eventTarget.nextElementSibling) return;
					e.preventDefault(); //to prevent scrolling
					(eventTarget.nextElementSibling as HTMLElement).focus();
					break;
				case "ArrowUp":
					// if user press arrow up, it moves focus to and selects the previous option.
					if (!eventTarget.previousElementSibling) return;
					e.preventDefault();
					(eventTarget.previousElementSibling as HTMLElement).focus();
					break;
				case "Enter":
					//If user press enter, it collapses the listbox and keeps the currently selected option as the button label.
					setShowOptions(false);
					handleSelection(eventTarget.id);
					break;
				case "Escape":
					//If user press esc, it collapses the listbox and moves focus to the button.
					setShowOptions(false);
					filterDropdown.current?.focus();
					break;
				default:
					break;
			}
		}
	};

	//Clicking outside the listbox when it is expanded should collapse it.
	//Nevetherless, we need to verify first if the clicks event happened inside the filter component, 
	//those clicks shouldn't collapse our listbox
	const handleClickOutside = (e: MouseEvent) => {
		const eventTarget = e.target as HTMLElement
		//JavaScript doesn't consider that the dropwdown button icon is nested inside the filter.
		//So before everything else we'll check if the click ocurred on the icon
		//If so we'll prevent that click from collapsing the listbox
		const clickOcurredOnDropdownIcon = eventTarget.closest(".filter__dropdown__icon"); 
		if (clickOcurredOnDropdownIcon) return;

		if (!filter.current?.contains(eventTarget)) setShowOptions(false);
	};

	useEffect(() => {
		if (!showOptions) return;
		// when listbox expands focus should be placed on the currently selected option in the list.
		itemToFocus.current?.focus();
	}, [showOptions, itemToFocus]);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);


	return (
		<div className="filter" ref={filter}>
			<button
				className="filter__dropdown"
				id="filter-dropdown"
				ref={filterDropdown}
				onClick={() => setShowOptions(!showOptions)}
				onKeyDown={handleKeyDown}
				aria-haspopup="listbox"
				aria-expanded={!showOptions ? undefined : "true"} //passing undefined here is the same as not including it at all. This way we can create something closer to Collapsible Dropdown Listbox Example by W3.org
			>
				{selectedItem === "All" ? `Filter by ${criterion}` : selectedItem}
				{!showOptions ? (
					<RiArrowDropDownLine aria-hidden="true" />
				) : (
					<RiArrowDropUpLine aria-hidden="true" />
				)}
			</button>
			<ul
				className={
					!showOptions
						? "filter__dropdown__box"
						: "filter__dropdown__box filter__dropdown__box--active"
				}
				aria-labelledby="filter-dropdown"
				role="listbox"
				aria-activedescendant={selectedItem}
			>
				{items.map((item) => (
					<li
						key={uuidv4()}
						ref={item !== selectedItem ? undefined : itemToFocus}
						id={item}
						className="filter__dropdown__box__option"
						onClick={handleClick}
						onKeyDown={handleKeyDown}
						role="option"
						tabIndex={-1} //This means its not focusable through sequential keyboard navigation, but it can still be programatically focused
						aria-selected={item !== selectedItem ? "false" : "true"}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
