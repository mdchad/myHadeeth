import { Link, useSearchParams } from "expo-router"
import { FlatList, SectionList, Text, View } from "react-native"

const chapter = [
    {
        id: 1,
        title: "Chapter 1",
    },
    {
        id: 2,
        title: "Chapter 2",
    },
    {
        id: 3,
        title: "Chapter 3",
    },
    {
        id: 4,
        title: "Chapter 4",
    }
];

const hadeethContent = () => {
    const { id } = useSearchParams();

    return (
        <View className="flex gap-3">
            <View>
                <Text>Hadeeth ID: {id}</Text>
                <Text>Hadeeth Info</Text>
            </View>

            <View>
                <Text>Chapters:</Text>
                <FlatList
                    data={chapter}
                    renderItem={({ item }) => (
                        <Link href={`Content/Hadeeth/chapter/${item.id}`}>
                            <Text>{item.title}</Text>
                        </Link>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <Link href="Content/Hadeeth">Back</Link>
        </View>
    )
}

export default hadeethContent