export interface WeatherForecast {
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
      appIcon: string
      color: string
      temp: number
      apparentTemp: number
      pop: number
    }[]
    longTerm: {
      dateLabel: string
      icon: string
      appIcon: string
      color: string
      summary: string
      sunrise: number
      sunset: number
      pop: number
      tempMin: number
      tempMax: number
      apparentTempMin: number
      apparentTempMax: number
    }[]
  }
}