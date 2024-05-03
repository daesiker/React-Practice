
export const TabType = {
    KEYWORD:"KEYWORD",
    HISTORY:"HISTORY",
};

const TabLabel = {
    [TabType.KEYWORD]: "추천 검색어",
    [TabType.HISTORY]: "최근 검색어",
};

type TabsProps = {
    selectedTab:string,
    onChange:(selectedTab:string) => void

}

export function Tabs({selectedTab, onChange}:TabsProps) {
    return (
        <>
            <ul className="tabs">
                {Object.values(TabType).map((tabType) => (
                    <li
                        key={tabType}
                        className={selectedTab === tabType ? "active" : ""}
                        onClick={() => onChange(tabType)}
                    >
                        {TabLabel[tabType]}
                    </li>
                ))}
            </ul>

        </>
    )
}
