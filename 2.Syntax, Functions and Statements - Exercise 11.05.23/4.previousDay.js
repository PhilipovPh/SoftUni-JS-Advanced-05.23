function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1)

    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yy = date.getFullYear();

    console.log(`${yy}-${mm}-${dd}`);
}
previousDay(2016, 10, 1)