<template>
    <div class="tournament-container">
      <div class="tournament-headers">
        <h3 v-for="(stage, index) in stages" :key="index">{{ stage.title }}</h3>
      </div>
  
      <div class="tournament-brackets">
        <ul
          class="bracket"
          v-for="(stage, index) in stages"
          :key="index"
          :class="`bracket-${index + 1}`"
        >
          <li
            class="team-item"
            v-for="(match, matchIndex) in stage.matches"
            :key="matchIndex"
          >
            {{ match.teamA }} <time>{{ match.time }}</time> {{ match.teamB }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      stages: Array, // Принимает массив стадий с матчами и временем
    },
  };
  </script>
  
  <style lang="less" scoped>
// Color variables (appears count calculates by raw css)
@color0: #cccccc; // Appears 3 times
@color1: #4f7a38; // Appears 2 times

// Width variables (appears count calculates by raw css)
@width1: 10px; // Appears 2 times

// Height variables (appears count calculates by raw css)
@height0: 100%; // Appears 4 times
@height1: 200%; // Appears 2 times
@height2: 350%; // Appears 2 times
@height3: 700%; // Appears 2 times

html {
	height: @height0;
	width: 100%;
}
body {
	font-family: sans-serif;
	height: @height0;
	margin: 0;
}
.tournament-headers {
	border-bottom: 1px solid @color0;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	justify-content: space-around;
	h3 {
		border-right: 1px dashed @color0;
		font-weight: 400;
		margin: 0;
		padding: 1rem;
		text-align: center;
		width: 25%;
	}
}
.tournament-brackets {
	background: #fdfdfd;
	display: flex;
	flex-direction: row;
	list-style-type: none;
	margin-bottom: 50px;
}
.bracket {
	border-right: 1px dashed @color0;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex: 1;
	justify-content: space-around;
	list-style-type: none;
	margin: 0;
	padding-left: 0;
	padding: 30px 0;
	&:first-of-type {
		.team-item {
			&:before {
				display: none;
			}
		}
	}
	&:last-of-type {
		.team-item {
			&:before {
				display: none;
			}
			&:after {
				display: none;
			}
		}
	}
}
.team-item {
	background-color: #f4f4f4;
	display: block;
	line-height: 2;
	margin: 0.5rem 10px;
	padding: 0.5rem;
	position: relative;
	text-align: center;
	vertical-align: middle;
	&:after {
		border-color: @color1;
		border-width: 2px;
		content: '';
		display: block;
		position: absolute;
		right: -11px;
		width: @width1;
	}
	&:nth-of-type(odd) {
		&:after {
			border-right-style: solid;
			border-top-style: solid;
			height: @height0;
			top: 50%;
		}
	}
	&:nth-of-type(even) {
		&:after {
			border-bottom-style: solid;
			border-right-style: solid;
			height: @height0;
			top: -50%;
		}
	}
	&:before {
		border-top: 2px solid @color1;
		content: '';
		height: 2px;
		left: -10px;
		position: absolute;
		top: 50%;
		width: @width1;
	}
	time {
		background-color: #dbdbdb;
		display: inline-block;
		font-size: 0.8rem;
		padding: 0 0.6rem;
	}
}
.bracket-2 {
	.team-item {
		&:nth-of-type(odd) {
			after {
				height: @height1;
				top: 50%;
			}
		}
		&:nth-of-type(even) {
			after {
				height: @height1;
				top: -150%;
			}
		}
	}
}
.bracket-3 {
	.team-item {
		&:nth-of-type(odd) {
			after {
				height: @height2;
				top: 50%;
			}
		}
		&:nth-of-type(even) {
			after {
				height: @height2;
				top: -300%;
			}
		}
	}
}
.bracket-4 {
	.team-item {
		&:nth-of-type(odd) {
			after {
				height: @height3;
				top: 50%;
			}
		}
		&:nth-of-type(even) {
			after {
				height: @height3;
				top: -650%;
			}
		}
		&:after {
			display: none;
		}
	}
}
  </style>
  