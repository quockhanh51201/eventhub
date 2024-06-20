import AsyncStorage from "@react-native-async-storage/async-storage"

const addStorage = async (key: string, value: any) => {
    if (typeof (value !== 'string')) {
        value = JSON.stringify(value)
    }
    await AsyncStorage.setItem(key, value)
}
// Xóa một mục cụ thể khỏi AsyncStorage bằng cách truyền tên khóa của mục đó
const removeItemFromStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        // console.log('Item removed successfully!');
    } catch (error) {
        console.error('Error removing item:', error);
    }
};
// Xóa toàn bộ dữ liệu khỏi AsyncStorage
const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        // console.log('AsyncStorage cleared successfully!');
    } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
    }
};

export default { addStorage, removeItemFromStorage, clearStorage }