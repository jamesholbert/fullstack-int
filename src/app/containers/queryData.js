import React from 'react'

export default function getResponse(emsi) {
	let response = {}
	if (emsi) {
		response = {
			"occupation": {
				"onet": "15-1131",
				"title": "Computer Programmers"
			},
			"region": {
				"type": "MSA",
				"id": "42660",
				"title": "Seattle-Tacoma-Bellevue, WA"
			},
			"summary": {
				"jobs": {
					"year": 2015,
					"regional": 12352,
					"national_avg": 6501
				},
				"jobs_growth": {
					"start_year": 2013,
					"end_year": 2018,
					"regional": 10.2,
					"national_avg": 8.5
				},
				"earnings": {
					"regional": 57.24,
					"national_avg": 38.20
				}
			},
			"trend_comparison": {
				"start_year": 2013,
				"end_year": 2018,
				"regional": [
					11904,
					12384,
					12352,
					12680,
					12920,
					13114
				],
				"state": [
					13103,
					13598,
					13599,
					13968,
					14244,
					14469
				],
				"nation": [
					300651,
					307024,
					314154,
					318998,
					326205
				]
			},
			"employing_industries": {
				"year": 2015,
				"jobs": 12352,
				"industries": [{
						"naics": "511210",
						"title": "Software Publishers",
						"in_occupation_jobs": 4654,
						"jobs": 52886
					},
					{
						"naics": "541512",
						"title": "Computer Systems Design Services",
						"in_occupation_jobs": 1873,
						"jobs": 20582
					},
					{
						"naics": "541512",
						"title": "Custom Computer Programming Services",
						"in_occupation_jobs": 1388,
						"jobs": 15252
					},
					{
						"naics": "541512",
						"title": "Aircraft Manufacturing",
						"in_occupation_jobs": 444,
						"jobs": 71612
					},
					{
						"naics": "541512",
						"title": "Other Computer Related Services",
						"in_occupation_jobs": 296,
						"jobs": 3245
					}
				]
			}
		}
	} else {
		response = {
			"occupation": {
				"onet": "11-1101",
				"title": "Chief Executives"
			},
			"region": {
				"type": "County",
				"id": "16057",
				"title": "Latah County, ID"
			},
			"summary": {
				"jobs": {
					"year": 2016,
					"regional": 50,
					"national_avg": 60
				},
				"jobs_growth": {
					"start_year": 2013,
					"end_year": 2018,
					"regional": -5.5,
					"national_avg": -6.6
				},
				"earnings": {
					"regional": 96.24,
					"national_avg": 138.20
				}
			},
			"trend_comparison": {
				"start_year": 2013,
				"end_year": 2018,
				"regional": [
					1904,
					1384,
					1352,
					1680,
					1920,
					1114
				],
				"state": [
					3103,
					3598,
					3599,
					3968,
					4244,
					4469
				],
				"nation": [
					30065,
					30702,
					31415,
					31899,
					32620
				]
			},
			"employing_industries": {
				"year": 2015,
				"jobs": 12352,
				"industries": [{
						"naics": "151515",
						"title": "Trimming Kaleb's Beard",
						"in_occupation_jobs": 10,
						"jobs": 528
					},
					{
						"naics": "141414",
						"title": "Beating Nick at Foosball",
						"in_occupation_jobs": 18,
						"jobs": 205
					},
					{
						"naics": "131313",
						"title": "Ultimate frisbee frisbee manufacturing",
						"in_occupation_jobs": 5,
						"jobs": 1525
					},
					{
						"naics": "121212",
						"title": "Ping pong ball manufacturing",
						"in_occupation_jobs": 4,
						"jobs": 716
					},
					{
						"naics": "111111",
						"title": "Rigging nerf guns to explode",
						"in_occupation_jobs": 29,
						"jobs": 424
					}
				]
			}
		}

	}
	return response
}