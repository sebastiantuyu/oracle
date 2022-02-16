import React from "react";
import IResultsRow from "../../../DTOs/DTOs";
import ResultsEmpty from "../ResultsEmpty/ResultsEmpty";
import ResultsRow from "../ResultsRow/ResultsRow";
import "./ResultsTable.scss";

interface IProps {
    results: IResultsRow[];
}

export default function ResultsTable({ results }: IProps) {
    const renderRows = () => {
       if(results === undefined) {
        return (<ResultsEmpty />);
       } else {
        return results.map((e: IResultsRow, index: number) => {
            return (
                <ResultsRow data={e} key={index}/>
            );
        });
       }
    };

    const enableScrollItems = () => {
        return "odl-resultstable "
            + ((results?.length > 7)
            ? "enable--scroll"
            : "");
    };

    return (
    <div data-testid="results-wrapper" className={enableScrollItems()}>
        <div
         className="odl-resultstable__container">
            {renderRows()}
        </div>
    </div>
  );
}
