import Vue from 'vue';
import { AppHeader } from './components/header.component';
import { ButtonCounter } from './components/button-counter.component';

export const App = Vue.component('app', {
	data: function () {
		return {
			hello: 'Hello vuejs jsx',
			count: 1
		}
	},
	render: function (h) {
		return (
			<div>
				<AppHeader title={this.hello} />
				<div class="p-2">
					<p>
						ButtonCount Component with Prop "count" and "event": "clicked":
						<ButtonCounter count={this.count} on-clicked={() => { this.count++ }} />
					</p>

					<p>
						simple input type "number" with v-model = this.count
						<div>
							<input class="form-control" type="number" v-model={this.count} />
						</div>
					</p>
				</div>
			</div>
		)
	}
});
