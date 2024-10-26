<template>
<header>
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <RouterLink to="/">
        <div class="flex items-center gap-3 flex-1">
            <i class="fa-solid fa-sun text-2xl"></i>
            <p class="text-2xl">當地天氣</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i class="fa-solid fa-circle-info text-xl
         hover:text-secondary duration-150 cursor-pointer"
         @click="toggleModal"
         >
        </i>
        <i class="fa-solid fa-plus text-xl
         hover:text-secondary duration-150 cursor-pointer">
        </i>
      </div>

      <BaseModalComponent
       :modalActive="modalActive"
       @close-modal="toggleModal"
      >
        <div class="text-black">
            <h2 class="text-2xl mb-1">關於：</h2>
            <p class="mb-4">本地天氣可讓您追蹤您選擇的城市當前和未來的天氣。</p>
            <h2 class="text-2xl">工作原理：</h2>
            <ol class="list-decimal list-inside mb-4">
                <li>
                    在搜尋欄中輸入名稱以搜尋您所在的城市。
                </li>
                <li>
                    在結果中選擇一個城市，這將帶您選擇當前的天氣。
                </li>
                <li>
                    點擊右上角的“+”圖示追蹤城市。這將保存城市以便稍後在主頁上查看。
                </li>
            </ol>
            <h2 class="text-2xl mb-1">刪除</h2>
            <p c>
                如果您不想再追蹤某個城市，只需在主頁中選擇該城市即可。在底部
                頁面，會有刪除城市的選項。
            </p>
        </div>
      </BaseModalComponent>
    </nav>
</header>
</template>

<script setup>
import { ref } from 'vue';
import BaseModalComponent from './BaseModalComponent.vue';

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
