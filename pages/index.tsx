import React from 'react';
import { getCountries } from '../services/countriesService';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Country } from '../countries.types';

export const getStaticProps: GetStaticProps<{countries: Country[], error?: string}> = async () => {
    try {
        return {
            props: {
                countries: await getCountries()
            }
        }
    } catch (err) {
        return {
            props: {
                countries: [],
                error: "Sorry, something went wrong, please try refreshing the page later"
            }
        }
    }
}

export default function index({countries, error}: InferGetStaticPropsType<typeof getStaticProps>) {
  
    return (
    <div>
        index
    </div>
  )
}
