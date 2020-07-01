let processing = require('./datas/processing.json')
//각각의 별점에 따라 점수를 반환 하는 함수
const getRank = (json, mbti) => {
	//0==time,1==importance,2==succes

	for (let value of processing[mbti][0]) {
		if (value == 0) {
			json['rating_time'] *= 2
		}
		if (value == 1) {
			json['rating_import'] *= 2
		}
		if (value == 2) {
			json['rating_success'] *= 2
		}
	}
	for (let value of processing[mbti][1]) {
		if (value == 0) {
			json['rating_time'] *= 1.5
		}
		if (value == 1) {
			json['rating_import'] *= 1.5
		}
		if (value == 2) {
			json['rating_success'] *= 1.5
		}
	}
	// for(let value of processing[mbti][2]){
	//     if (value==0){time*=2}
	//     if (value==1){importance*=2}
	//     if (value==2){success*=2}
	//     }
	// console.log(
	// 	json['rating_time'] + json['rating_import'] + json['rating_success']
	// )

	return json['rating_time'] + json['rating_import'] + json['rating_success']
}

//getRank함수를 이용하여 모든 리스트의 값을 비교하여 제일 높은 함수를 리턴하는 함수
const Return1stList = (list, mbti) => {
	let biggest_index = 0
	let big_score = 0
	let indexs = []
	for (let i in list) {
		let score = getRank(list[i], mbti)
		indexs.push(score)
		if (big_score < score) {
			biggest_index = i
			big_score = score
		}
	}

	return bubbleSort(indexs)
}

var bubbleSort = function (array) {
	let list = []
	var length = array.length
	var i, j, temp
	for (let i = 0; i < length; i++) {
		list.push(i)
	}
	for (i = 0; i < length - 1; i++) {
		// 순차적으로 비교하기 위한 반복문
		for (j = 0; j < length - 1 - i; j++) {
			// 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
			if (array[j] > array[j + 1]) {
				// 두 수를 비교하여 앞 수가 뒷 수보다 크면
				temp = array[j] // 두 수를 서로 바꿔준다
				array[j] = array[j + 1]
				array[j + 1] = temp

				temp = list[j] // 두 수를 서로 바꿔준다
				list[j] = list[j + 1]
				list[j + 1] = temp
			}
		}
	}
	return list.reverse()
}

module.exports = Return1stList
// [['계획 이름',5,3,3],['계획 이름',3,3,5],['계획 이름',3,5,3],['계획 이름',3,3,3]]
