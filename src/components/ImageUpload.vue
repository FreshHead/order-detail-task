<script setup lang="ts">
import {
  NUpload,
  NUploadDragger,
  NIcon,
  NText,
  type UploadSettledFileInfo,
  type UploadFileInfo,
} from 'naive-ui';
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5';
import { computed } from 'vue';
import type { Order } from '@/types/Order';

const image = defineModel<Order['image']>();

const previewFileList = computed<UploadFileInfo[] | undefined>(() => {
  if (image.value) {
    return [image.value];
  }
  return undefined;
});

function onImageUpdate(fileInfoList: UploadSettledFileInfo[]) {
  const newFile = fileInfoList[fileInfoList.length - 1];
  if (newFile?.file) {
    image.value = { ...newFile, url: URL.createObjectURL(newFile.file) };
  } else {
    image.value = undefined;
  }
}
</script>
<template>
  <n-upload
    accept="image/*"
    :file-list="previewFileList"
    list-type="image"
    @update-file-list="onImageUpdate"
  >
    <n-upload-dragger>
      <div>
        <n-icon size="48" :depth="3">
          <ArchiveIcon />
        </n-icon>
      </div>
      <n-text> Нажмите или перетащите изображение заказа </n-text>
    </n-upload-dragger>
  </n-upload>
</template>

<style></style>
