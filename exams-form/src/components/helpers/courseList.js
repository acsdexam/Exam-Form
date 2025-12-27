const data = [
"FORM CLOSED"

];
const courseList = data.map((el, index) => {
return {
value: index + 1,
label: el,
};
});
export default courseList;
