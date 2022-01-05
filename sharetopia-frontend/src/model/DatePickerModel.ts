import { DateRange } from "@/model/SearchModel";

export type DatePickerModel = {
  pickedRange: DateRange;
  availableDateRange?: DateRange;
  unAvailableDateRanges: DateRange[];
};
