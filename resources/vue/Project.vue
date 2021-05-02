<template>
	<div class="content project">
		<a v-if=project.github :href=project.github class="site" title="Open at GitHub.com">
			<IconGithubCorner/>
		</a>
		<div class="markdown">
			<img v-if=project.banner class="banner" :src=project.banner alt="Banner" style="margin: 60px auto">
			<h1><img v-if=project.icon class="icon" :src=project.icon alt="Icon">
				{{project.name}} <small v-if="project.year">({{ project.year }})</small>
			</h1>
			<div class="topics">
				<span class="tag lang" v-for="(lang, index) in project.languages" :key="'lang' + index">
					{{ lang }}
				</span><span class="tag frame" v-for="(frame, index) in project.frameworks" :key="'frame' + index">
					{{ frame }}
				</span><span class="tag plat" v-for="(plat, index) in project.platforms" :key="'plat' + index">
					{{ plat }}
				</span>
			</div>
			<component v-bind:is="project.project"></component>
		</div>
	</div>
</template>

<script lang="ts">
import IconGithubCorner from "@vue/Icons/IconGithubCorner.vue";
import {Component, Prop, Vue} from 'vue-property-decorator'
import {AppProject} from "@ts/App/AppProject";

@Component({components: {IconGithubCorner}})
export default class Project extends Vue {
	@Prop() project!: AppProject;
}
</script>
