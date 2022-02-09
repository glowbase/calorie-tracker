import { MagnifyingGlass } from 'phosphor-react';

export default function SearchInput() {
  return (
    <div className="search-input">
      <MagnifyingGlass weight={'bold'} size={20} color="rgb(53, 104, 199)" />
      <input type="text" />
    </div>
  )
}