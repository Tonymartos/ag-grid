// Type definitions for @ag-grid-community/core v23.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IFloatingFilterParams } from "../floatingFilter";
import { ProvidedFilterModel } from "../../../interfaces/iFilter";
import { SimpleFloatingFilter } from "./simpleFloatingFilter";
import { FilterChangedEvent } from "../../../events";
export declare abstract class TextInputFloatingFilter extends SimpleFloatingFilter {
    private eFloatingFilterInput;
    protected params: IFloatingFilterParams;
    private applyActive;
    protected postConstruct(): void;
    protected getDefaultDebounceMs(): number;
    onParentModelChanged(model: ProvidedFilterModel, event: FilterChangedEvent): void;
    init(params: IFloatingFilterParams): void;
    private syncUpWithParentFilter;
    protected setEditable(editable: boolean): void;
}