import Vue from 'vue';

export const AppHeader = Vue.component('app-header', {
	props: ['title'],
	template: '<div>{{title}}</div>'
});
