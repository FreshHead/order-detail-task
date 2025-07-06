<script setup lang="ts">
import { NUpload, NUploadDragger, NIcon, NText, type UploadSettledFileInfo } from 'naive-ui';
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5';
import type { UploadFileInfo } from 'naive-ui';

const files = defineModel<UploadFileInfo[]>();

function onAttachmentsUpdate(updatedFiles: UploadSettledFileInfo[]) {
  files.value = updatedFiles;
}
</script>
<template>
  <n-upload
    multiple
    directory-dnd
    :max="5"
    :default-file-list="files"
    @update-file-list="onAttachmentsUpdate"
  >
    <n-upload-dragger>
      <div>
        <n-icon size="48" :depth="3">
          <ArchiveIcon />
        </n-icon>
      </div>
      <n-text> Нажмите или перетащите вложенные файлы </n-text>
    </n-upload-dragger>
  </n-upload>
</template>
