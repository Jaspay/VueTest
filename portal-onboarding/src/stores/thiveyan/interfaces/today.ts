export interface CurrentWeather {
    meta: {
      status: number
      type: string
      message: string | null
      errors: string | null
      datetime: string | null
    }
    data: {
      temp: number
      tempFeelsLike: number
      high: number
      low: number
      dayStatus: string
      icon: string
      color: string
    }
  }