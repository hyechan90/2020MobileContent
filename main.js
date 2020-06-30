let processing = require('./datas/processing.json')
//각각의 별점에 따라 점수를 반환 하는 함수
const getRank = ([name, importance, time, success]) => {
	//0==time,1==importance,2==succes

	//get User MBTI and input MBTI in mbti
	const mbti = 'ENTJ'

	for (let value of processing[mbti][0]) {
		if (value == 0) {
			time *= 2
		}
		if (value == 1) {
			importance *= 2
		}
		if (value == 2) {
			success *= 2
		}
	}
	for (let value of processing[mbti][1]) {
		if (value == 0) {
			time *= 1.5
		}
		if (value == 1) {
			importance *= 1.5
		}
		if (value == 2) {
			success *= 1.5
		}
	}
	// for(let value of processing[mbti][2]){
	//     if (value==0){time*=2}
	//     if (value==1){importance*=2}
	//     if (value==2){success*=2}
	//     }
	console.log(importance + time + success)

	return importance + time + success
}

//getRank함수를 이용하여 모든 리스트의 값을 비교하여 제일 높은 함수를 리턴하는 함수
const Return1stList = (list) => {
	let biggest_index = 0
	let big_score = 0
	for (let i in list) {
		let score = getRank(list[i])
		if (big_score < score) {
			biggest_index = i
			big_score = score
		}
	}
	console.log(list[biggest_index][0])

	return biggest_index
}

console.log(
	Return1stList([
		['계획 이름1', 5, 3, 3],
		['계획 이름2', 3, 3, 5],
		['계획 이름3', 3, 5, 3],
		['계획 이름4', 3, 3, 3],
	])
)
