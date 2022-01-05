import { computed, ref } from "vue";
import { DatePickerModel } from "@/model/DatePickerModel";
import { ProductModel } from "@/model/ProductModel";
import { DateRange } from "@/model/SearchModel";

export function useDatePicker() {
  const datePickerModel = ref<DatePickerModel>({
    unAvailableDateRanges: [],
    availableDateRange: undefined,
    pickedRange: {
      start: undefined,
      end: undefined,
    },
  });
  const selectedRange = computed(() => {
    return datePickerModel.value.pickedRange;
  });
  const updateDatePickerModel = (product: ProductModel) => {
    datePickerModel.value = {
      pickedRange: {
        start: undefined,
        end: undefined,
      },
      availableDateRange: {
        start: getStartDate(product),
        end: getEndDate(product),
      },
      unAvailableDateRanges: getBookedDates(product),
    };
  };

  const getStartDate = (product: ProductModel) => {
    if (product.bookingDates)
      return product.bookingDates.available.start as Date;
  };

  const getEndDate = (product: ProductModel) => {
    if (product.bookingDates) return product.bookingDates.available.end as Date;
  };

  const getBookedDates = (product: ProductModel) => {
    if (product.bookingDates) {
      return product.bookingDates.unavailable as DateRange[];
    }
    return [];
  };
  return {
    datePickerModel,
    selectedRange,
    updateDatePickerModel,
  };
}
