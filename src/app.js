import Vue from 'vue';
import { AppHeader } from './components/header.component';
import { ButtonCounter } from './components/button-counter.component';

export const App = Vue.component('app', {
	data: function () {
		return {
			hello: 'hello vuejs jsx',
			count: 1
		}
	},
	render: function (h) {
		return (
			<div>
				<AppHeader title={this.hello} />
				<ButtonCounter count={this.count} on-clicked={() => { this.count++ }} />
				<div>
					<input v-model={this.count} />
				</div>
			</div>
		)
	}
});
