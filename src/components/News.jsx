import React from 'react'


const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1ea24b3aafmsh6edcec90728c570p1116fbjsn87e296ebbd73',
		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log("News Coming is"+ result);
} catch (error) {
	console.error(error);
}

function News() {
  return (
    <div>
      Hello
    </div>
  )
}

export default News
