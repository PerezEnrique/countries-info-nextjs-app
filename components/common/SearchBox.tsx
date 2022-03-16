import { ChangeEventHandler } from "react";
import { IoMdSearch } from "react-icons/io";

type SearchBoxProps = {
	query: string
	handleQuery: ChangeEventHandler<HTMLInputElement>
	placeholder: string
}

export default function SearchBox({ query, handleQuery, placeholder }: SearchBoxProps) {
	return (
		<div className="search-box" role="search">
			<IoMdSearch aria-hidden="true" />
			<input
				className="search-box__input"
				type="search"
				value={query}
				onChange={handleQuery}
				placeholder={placeholder}
			/>
		</div>
	);
}
