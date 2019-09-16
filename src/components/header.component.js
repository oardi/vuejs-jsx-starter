import Vue from 'vue';

export const AppHeader = Vue.component('app-header', {
	props: { title: String },
	template: '<div>{{title}}</div>'
});
