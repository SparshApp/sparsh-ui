import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import TextInput from "../TextInput/TextInput";

const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  color: #1c1c1c;
`;

interface SearchbarProps {
  placeholder: string;
  value: string;
  onSearchChange: (value: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  placeholder,
  value,
  onSearchChange,
}) => {
  return (
    <SearchbarWrapper>
      <IconWrapper>
        <BsSearch size={20} />
      </IconWrapper>
      <TextInput
        label="Search"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onSearchChange}
      />
    </SearchbarWrapper>
  );
};

export default Searchbar;
