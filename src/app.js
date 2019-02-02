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
				<div class="header p-2">
					<AppHeader title={this.hello} />
				</div>

				<div class="p-2">
					<div>
						ButtonCount Component with Prop "count" and "event": "clicked":
						<div>
							<ButtonCounter count={this.count} on-clicked={() => { this.count++ }} />
						</div>
					</div>
					<div class="pt-2">
						simple input type "number" with v-model = this.count
						<div>
							<input class="form-control" type="number" v-model={this.count} />
						</div>
					</div>
				</div>
			</div>
		)
	}
});
