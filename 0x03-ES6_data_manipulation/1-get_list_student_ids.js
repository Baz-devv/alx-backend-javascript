export default function getListStudentIds(data) {
	if (data === []) return [];
	let id = data.map(x => x.id);
	return id;
};
