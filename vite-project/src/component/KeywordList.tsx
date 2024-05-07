import {KeywordData} from '../model/model.ts';

type KeywordListProps = {
    data: KeywordData[];
    onClick: (keyword: string) => void;
    
}

function KeywordList({data, onClick}:KeywordListProps) {
    return (
        <ul className='list'>
            {data.map((item, index) => {
                return (
                    <li key={item.id} onClick={()=> onClick(item.keyword)}>
                        <span className='number'>{index + 1}</span>
                        <span>{item.keyword}</span>
                    </li>
                )
            })}
        </ul>
    )
}


export default KeywordList

