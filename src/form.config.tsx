import { Button } from "m-ui";
import { EasyFormItem, EasyRules, EasyWatch } from "@ks/easy-form";
import { useSetRekuState } from "@ks/reku";
import { Task } from "./apis";
import City from "./components/City";
import Province from "./components/Province";
import { selectedProvinceIdAtom } from "./ddd/application";

function useFormConfig(onSubmit: () => void) {
    const setSelectedProvinceId = useSetRekuState(selectedProvinceIdAtom);

    const formItems: EasyFormItem<Task>[] = [
        {
            label: '省',
            name: 'province',
            component: <Province />
        },
        {
            label: '市区',
            name: 'city',
            component: <City />
        },
        {
            key: 'sbumit',
            component: <Button style={{ marginLeft: '200px' }} onClick={onSubmit}>提交</Button>
        }
    ];

    const rules: EasyRules<Task>[] = [
        {
            name: 'province',
            rules: [{ required: true }]
        },
        {
            name: 'city',
            rules: [{ required: true }]
        }
    ];

    const watch: EasyWatch<Task>[] = [
        {
            name: 'province',
            callback: (values) => {
                setSelectedProvinceId(values.province);
            }
        }
    ]

    return {
        formItems,
        rules,
        watch
    }
}

export {
    useFormConfig
}