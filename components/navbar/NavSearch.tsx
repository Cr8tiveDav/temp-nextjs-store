'use client';

import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );
  // console.log(searchParams);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
    // console.log(params.toString());
  }, 500);

  // Clear search input if search value is empty
  const searchValue = searchParams.get('search');
  useEffect(() => {
    if (!searchValue) {
      setSearch('');
    }
  }, [searchValue]);

  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-xl dark:bg-muted'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};
export default NavSearch;
