import { ZodError } from "zod";

export { }

declare global {

    interface FieldData {
        id: number | string;
        title: string;
        type?: string;
        placeholder?: string;
        slug?: string;
        mandatory?: boolean;
        divider?: boolean;
        m_show?: boolean;
    }

    interface MenuData {
        id: number;
        title: string;
        description: string;
        slug: string;
        completed: boolean;
        fields: FieldData[];
    }

    interface SubmitData {
        success: boolean;
        errors: ZodError
    }

}