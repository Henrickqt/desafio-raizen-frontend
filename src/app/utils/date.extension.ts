export function getDayFromTimestamp(timestamp: number) {
  const days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
  const date = new Date(timestamp * 1000);
  return days[ date.getDay() ];
}

export function getHourFromTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return `${date.getHours().toString().padStart(2, '0')}:00`;
}
