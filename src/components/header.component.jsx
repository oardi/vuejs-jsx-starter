import Vue from 'vue';

export const AppHeader = Vue.component('app-header', {
	props: { title: String },
	render: function (h) {
		return (
			<div class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
				<a class="navbar-brand" href="#">
					{this.title}
				</a>
			</div>
		);
	}
});
