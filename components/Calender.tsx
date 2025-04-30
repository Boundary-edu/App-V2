"use client"

import { useMemo } from "react"
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameDay,
} from "date-fns"

export function Calendar() {
  const today = new Date()

  // 한 달의 시작/끝, 주 단위 그리드 경계 계산
  const { weeks } = useMemo(() => {
    const monthStart = startOfMonth(today)
    const monthEnd = endOfMonth(monthStart)
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 }) // 일요일 시작
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })

    const rows = []
    let cursor = gridStart

    while (cursor <= gridEnd) {
      const days = Array.from({ length: 7 }).map(() => {
        const d = cursor
        cursor = addDays(cursor, 1)
        return d
      })
      rows.push(days)
    }

    return { weeks: rows }
  }, [today])

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  return (
    <div className="w-max mx-auto">
      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 text-gray-500 text-sm font-medium mb-2">
        {dayNames.map((d) => (
          <div key={d} className="flex justify-center">
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 gap-4 p-1.5">
        {weeks.flat().map((day, idx) => {
          const isCurrentMonth = day.getMonth() === today.getMonth()
          const isToday = isSameDay(day, today)
          return (
            <div
              key={idx}
              className={`w-10 h-10 flex items-center justify-center
                ${!isCurrentMonth ? "text-gray-300" : "text-gray-800"}
              `}
            >
              <span
                className={`inline-flex items-center justify-center w-8 h-8
                  ${isToday ? "bg-blue-100 text-blue-600 rounded-full" : ""}
                `}
              >
                {format(day, "d")}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
