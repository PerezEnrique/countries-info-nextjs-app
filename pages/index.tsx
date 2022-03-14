import { getCountries } from 'services/countriesService';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { Country } from 'countries.types';

export const getStaticProps: GetStaticProps<{countries: Country[]}> = async () => {
    return {
        props: {
            countries: await getCountries()
        }
    }
}

export default function index({countries}: InferGetStaticPropsType<typeof getStaticProps>) {
  
    return (
    <div>
        index
    </div>
  )
}
