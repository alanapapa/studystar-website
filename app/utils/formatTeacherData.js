export default function formatTeacherData(teacher, formatter) {
    return {
        fullname: formatter.Message(`teacher.fullname`), // Пример, если полное имя находится в файлах локализации
        occupation: formatter.Message(`teacher.occupation`),
        status: formatter.Message(`teacher.status.${teacher.statusKey}`),
    }
}
