<script setup lang="ts">
import { computed, h } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { CaretSortIcon, CheckIcon } from '@radix-icons/vue';
import { cn } from '/lib/utils';
import { Button } from '@/components/ui/button';

import { toast } from '@/components/ui/toast';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'German', value: 'de' },
] as const;

const formSchema = toTypedSchema(
  z.object({
    language: z.string({
      required_error: 'Please select a language.',
    }),
  }),
);

const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    language: '',
  },
});

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  });
});

const { locale, setLocale } = useI18n();

const getlanguage = computed(() => {
  return languages.find((language) => language.value === locale.value)?.label;
});
</script>

<template>
  <form class="space-y-6" @submit="onSubmit">
    <FormField name="language">
      <FormItem class="flex flex-col">
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                :class="
                  cn(
                    'w-[100px] justify-between bg-green-900 hover:bg-black hover:text-white',
                  )
                "
              >
                {{ getlanguage }}
                <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-[80px] p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="language in languages"
                    :key="language.value"
                    :value="language.label"
                    @select="
                      () => {
                        setLocale(language.value);
                        setFieldValue('language', language.value);
                      }
                    "
                  >
                    {{ language.label }}
                    <CheckIcon
                      :class="
                        cn(
                          'ml-auto h-4 w-4',
                          language.value === values.language
                            ? 'opacity-100'
                            : 'opacity-0',
                        )
                      "
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <FormMessage />
      </FormItem>
    </FormField>
  </form>
</template>
