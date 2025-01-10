export interface Forecast {
    meta: {
      status: number
      type: string
      message: null | string
      errors: null | string
      datetime: null | string
    }
    data: {
      shortTerm: {
        dateLabel: string
        icon: string
        color: string
        temp: number
      }[]
      longTerm: {
        dateLabel: string
        icon: string
        color: string
        summary: string
        tempMin: number
        tempMax: number
      }[]
    }
  }