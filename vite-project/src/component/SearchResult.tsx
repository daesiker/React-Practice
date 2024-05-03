import {ProductData} from '../model/model.ts';


type SearchResultProps = {
    data: ProductData[]
}

function SearchResult({ data }:SearchResultProps) {
    if (data.length<= 0) {
        return (
            <div className="empty-box">검색 결과가 없습니다</div>
        )
    }
    return (
        <ul className="result">
            {data.map(({id, name, imageUrl})=> (
                <li key= {id}>
                    <img src={imageUrl}/>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
    )
}

export default SearchResult