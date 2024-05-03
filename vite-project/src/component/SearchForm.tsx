import React from 'react';


type SearchFormProps = {
    searchKeyword:string
    handleChangeInput: (keyword: string) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    handelReset: () => void
}

function SearchForm({ searchKeyword, handleChangeInput, handleSubmit, handelReset}: SearchFormProps) {
    return(
        <form 
            onSubmit={event => handleSubmit(event)}
            onReset={() => handelReset() }
        >
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                autoFocus
                value={searchKeyword}
                onChange={(event) => handleChangeInput(event.target.value)}
            />
            {searchKeyword.length > 0 && (
                <button type="reset" className="btn-reset"></button>
            )}
        </form>
    )
}

export default SearchForm