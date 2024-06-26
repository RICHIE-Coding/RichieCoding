<template>
  <div
    class="px-10 sm:px-32 text-6xl text-richiegreen"
    style="line-height: 100px"
  >
    {{ $t('skills') }}
    <span class="typed-text">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const charIndex = ref(0);
const typeStatus = ref(false);
const typeValue = ref('');
const displayTextArrayIndex = ref(0);

const displayTextArray = ref([
  'Software Engineer',
  'Software Developer',
  'Programmer',
  'Coder',
  'Software Architect',
  'Systems Analyst',
  'Application Developer',
  'Web Developer',
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'Software Designer',
  'Software Programmer',
  'Software Technician',
  'Software Implementer',
  'Software Consultant',
  'Software Specialist',
  'Software Craftsperson',
  'Software Creator',
  'Software Constructor',
  'Software Constructor',
  'Software Builder',
  'Software Developer',
  'Software Crafting Specialist',
  'Software Crafting Expert',
  'Software Engineering Professional',
  'Software Development Specialist',
  'Software Engineering Consultant',
  'Software Engineering Practitioner',
  'Software Engineering Expert',
  'Software Development Professional',
  'Software Development Consultant',
  'Software Development Practitioner',
  'Code Developer',
  'Code Engineer',
  'Code Creator',
  'Code Architect',
  'Code Crafting Specialist',
  'Code Crafting Expert',
  'Coding Specialist',
  'Coding Engineer',
  'Coding Professional',
  'Coding Expert',
  'Programming Specialist',
  'Programming Engineer',
  'Programming Professional',
  'Programming Expert',
  'Scripting Specialist',
  'Scripting Engineer',
  'Scripting Professional',
  'Scripting Expert',
  'Application Engineering Specialist',
  'Application Engineering Professional',
  'Application Development Specialist',
  'Application Development Professional',
  'Application Programming Specialist',
  'Application Programming Professional',
  'Systems Engineering Specialist',
  'Systems Engineering Professional',
  'Systems Development Specialist',
  'Systems Development Professional',
  'Systems Programming Specialist',
  'Systems Programming Professional',
  'Backend Engineering Specialist',
  'Backend Engineering Professional',
  'Backend Development Specialist',
  'Backend Development Professional',
  'Frontend Engineering Specialist',
  'Frontend Engineering Professional',
  'Frontend Development Specialist',
  'Frontend Development Professional',
  'Full Stack Engineering Specialist',
  'Full Stack Engineering Professional',
  'Full Stack Development Specialist',
  'Full Stack Development Professional',
  'DevOps Specialist',
  'DevOps Professional',
  'Software Integration Specialist',
  'Software Integration Professional',
  'Software Maintenance Specialist',
  'Software Maintenance Professional',
  'Software Quality Assurance Specialist',
  'Software Quality Assurance Professional',
  'Software Testing Specialist',
  'Software Testing Professional',
  'Software Validation Specialist',
  'Software Validation Professional',
  'Software Verification Specialist',
  'Software Verification Professional',
  'Software Optimization Specialist',
  'Software Optimization Professional',
  'Software Security Specialist',
  'Software Security Professional',
  'Software Performance Specialist',
  'Software Performance Professional',
  'Software Scalability Specialist',
  'Software Scalability Professional',
  'Software Reliability Specialist',
  'Software Reliability Professional',
]);

const typingSpeed = ref(100); // milliseconds
const erasingSpeed = ref(50); // milliseconds
const newTextDelay = ref(2000); // milliseconds

const typeText = () => {
  if (
    charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length
  ) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += displayTextArray.value[
      displayTextArrayIndex.value
    ].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};

const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = displayTextArray.value[
      displayTextArrayIndex.value
    ].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraseText, erasingSpeed.value);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value += 1;
    if (displayTextArrayIndex.value >= displayTextArray.value.length)
      displayTextArrayIndex.value = 0;
    setTimeout(typeText, typingSpeed.value + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay.value + 200);
});
</script>

<style scoped>
h1 {
  font-size: 7rem;
  font-weight: normal;
  span.typed-text {
    color: #00ff00;
  }
}

.blinking-cursor {
  font-size: 6rem;
  color: white;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
}
</style>
