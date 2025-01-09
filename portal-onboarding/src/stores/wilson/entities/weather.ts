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
    uvIndex: number
    uvIndexHigh: number
    hourStatus: string
    dayStatus: string
    icon: string
    appIcon: string
    color: string
    hourly: number[]
  }
}