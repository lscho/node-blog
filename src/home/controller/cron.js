'use strict';

export default class extends think.controller.base {
	//百度推送
	async pushAction() {
		var request = think.require('request');
		var url = 'http://data.zz.baidu.com/urls?site=hersface.com&token=R3fAZJagDqraThTS';
		var map = {
			ispage: 1,
			status: 1
		};
		var data = await this.model('contents').getList(map, 1, 500);
		var list = [];
		for (let k in data['data']) {
			if (!think.isEmpty(data['data'][k]['url'])) {
				list.push('http://hersface.com/page/' + data['data'][k]['url'] + '.html');
			} else {
				list.push('http://hersface.com/page/' + data['data'][k]['id'] + '.html');
			}
		}
		request.post(url, {
			form: list.join('\n')
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body);
				this.end(body);
			}
		});
	}
}