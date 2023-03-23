import Highlighter from "react-highlight-words";

export function getPage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function splitSearchTerms(searchTerm) {
    return searchTerm.split(" ").filter((str) => str !== "");
}


export function highlightText(input, searchTerm) {
    if (searchTerm && searchTerm.length !== 0) {
        return (
            <Highlighter
                searchWords={searchTerm}
                autoEscape={true}
                textToHighlight={input}
            />
        )
    }
    return input
}