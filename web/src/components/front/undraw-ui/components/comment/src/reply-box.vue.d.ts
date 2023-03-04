import { ReplyApi } from '../../../index';
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: null;
        required: false;
    };
    parentId: {
        type: StringConstructor;
        required: true;
    };
}, {
    props: {
        data?: ReplyApi | null | undefined;
        parentId: string;
    };
    state: {
        loading: boolean;
        over: boolean;
        pageNum: number;
        pageSize: number;
    };
    replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (comments: ReplyApi) => void) => void;
    showSize: number;
    page: boolean;
    comments: import("vue").Ref<import('../../../index').CommentApi[]>;
    data: import("vue").ComputedRef<{
        total: number;
        length: number;
        list: any[];
    }>;
    replyMore: () => void;
    replyFinish: (val: any) => void;
    currentChange: (val: number) => void;
    sizeChange: (val: number) => void;
    ContentBox: import("vue").DefineComponent<{
        small: {
            type: BooleanConstructor;
            required: false;
        };
        data: {
            type: null;
            required: true;
        };
        parentId: {
            type: StringConstructor;
            required: true;
        };
    }, {
        props: {
            small?: boolean | undefined;
            data: import('../../../index').CommentApi;
            parentId: string;
        };
        state: {
            active: boolean;
        };
        commentRef: import("vue").Ref<import("./comment-box.vue").CommentBoxApi | undefined>;
        btnRef: import("vue").Ref<HTMLDivElement | undefined>;
        imgList: import("vue").ComputedRef<string[] | undefined>;
        allEmoji: import('../../../index').Emoji;
        like: (id: string) => void;
        user: import("vue").Ref<import('../../../index').UserApi>;
        isUserInfo: boolean;
        level: (v: number) => "" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"831\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#8CDBF4\" p-id=\"832\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"833\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m950.857143-365.714285l73.142857-73.142858v146.285715h-73.142857z m73.142857-73.142858h146.285715v146.285715h-146.285715z m0 146.285715h146.285715v438.857143h-146.285715z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"765\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#6ECEFF\" p-id=\"766\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"767\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m877.714286-438.857143h365.714286v146.285715h-365.714286z m219.428572 146.285715h146.285714v146.285714h-146.285714z m-219.428572 292.571428V512h146.285714v146.285714z\" fill=\"#FFFFFF\" p-id=\"768\"></path><path d=\"M1097.142857 585.142857V438.857143h365.714286v146.285714z m0 73.142857h365.714286v146.285715h-365.714286z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"799\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#599DFF\" p-id=\"800\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"801\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m877.714286-438.857143h365.714286v146.285715h-365.714286z m219.428572 146.285715h146.285714v73.142857h-146.285714z m0 219.428571h146.285714v73.142857h-146.285714z m-146.285715-146.285714h292.571429v146.285714h-292.571429z m-73.142857 219.428571h365.714286v146.285715h-365.714286z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"815\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#34D19B\" p-id=\"816\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"817\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m975.213715-365.714285L1243.428571 219.428571v219.428572h-146.285714zM1097.142857 438.857143h146.285714v292.571428h-146.285714z m146.285714 146.285714h73.142858v146.285714h-73.142858z m0-365.714286h73.142858v146.285715h-73.142858z m73.142858 0h146.285714v585.142858h-146.285714z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"782\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#FFA000\" p-id=\"783\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"784\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m1097.142858-73.142857h146.285714v219.428572h-146.285714z m-219.428572-365.714286h365.714286v146.285715h-365.714286z m0 438.857143h219.428572v146.285715h-219.428572z m73.142857-219.428571h219.428572v146.285714h-219.428572z\" fill=\"#FFFFFF\" p-id=\"785\"></path><path d=\"M1316.571429 438.857143h146.285714v146.285714h-146.285714z m-219.428572-73.142857h146.285714v219.428571h-146.285714z\" fill=\"#FFFFFF\"></path></svg>" | "<svg viewBox=\"0 0 1682 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"748\"><path d=\"M219.428571 73.142857h1243.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142858a146.285714 146.285714 0 0 1-146.285714 146.285714H219.428571a146.285714 146.285714 0 0 1-146.285714-146.285714V219.428571a146.285714 146.285714 0 0 1 146.285714-146.285714z\" fill=\"#F36262\" p-id=\"749\"></path><path d=\"M219.428571 292.571429h146.285715v512H219.428571z m365.714286 146.285714h146.285714l146.285715 365.714286h-146.285715z\" fill=\"#FFFFFF\" p-id=\"750\"></path><path d=\"M1024 438.857143h-146.285714l-146.285715 365.714286h146.285715zM219.428571 658.285714h365.714286v146.285715H219.428571z m1097.142858-146.285714h146.285714v292.571429h-146.285714z m-73.142858-292.571429h146.285715v146.285715h-146.285715z m-146.285714 146.285715h146.285714v438.857143h-146.285714z\" fill=\"#FFFFFF\" p-id=\"751\"></path><path d=\"M1243.428571 438.857143h219.428572v146.285714h-219.428572z m-48.786285-170.642286L1243.428571 219.428571v146.285715h-146.285714zM1243.428571 658.285714h146.285715v146.285715h-146.285715z\" fill=\"#FFFFFF\"></path></svg>";
        reply: () => void;
        hide: (event: Event) => void;
        content: import("vue").ComputedRef<string>;
        CommentBox: import("vue").DefineComponent<{
            placeholder: {
                type: StringConstructor;
                required: true;
            };
            contentBtn: {
                type: StringConstructor;
                required: true;
            };
            parentId: {
                type: StringConstructor;
                required: false;
            };
            replay: {
                type: StringConstructor;
                required: false;
            };
        }, {
            props: {
                placeholder: string;
                contentBtn: string;
                parentId?: string | undefined;
                replay?: string | undefined;
            };
            content: import("vue").Ref<string>;
            action: import("vue").Ref<boolean>;
            disabled: import("vue").Ref<boolean>;
            editorRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    minHeight: number;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    placeholder: {
                        type: StringConstructor;
                        required: false;
                    };
                    modelValue: {
                        type: StringConstructor;
                        required: true;
                    };
                    minHeight: {
                        type: NumberConstructor;
                        required: false;
                        default: number;
                    };
                    imgList: {
                        type: ArrayConstructor;
                        required: false;
                    };
                }>> & {
                    onSubmit?: ((...args: any[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                    onInput?: ((...args: any[]) => any) | undefined;
                    onFocus?: ((...args: any[]) => any) | undefined;
                    onBlur?: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "minHeight">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: "submit" | "update:modelValue" | "input" | "focus" | "blur", ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    placeholder: {
                        type: StringConstructor;
                        required: false;
                    };
                    modelValue: {
                        type: StringConstructor;
                        required: true;
                    };
                    minHeight: {
                        type: NumberConstructor;
                        required: false;
                        default: number;
                    };
                    imgList: {
                        type: ArrayConstructor;
                        required: false;
                    };
                }>> & {
                    onSubmit?: ((...args: any[]) => any) | undefined;
                    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                    onInput?: ((...args: any[]) => any) | undefined;
                    onFocus?: ((...args: any[]) => any) | undefined;
                    onBlur?: ((...args: any[]) => any) | undefined;
                }, {
                    props: {
                        placeholder?: string | undefined;
                        modelValue: string;
                        minHeight: number;
                        imgList?: string[] | undefined;
                    };
                    range: import("vue").Ref<Range | undefined>;
                    editorRef: import("vue").Ref<HTMLDivElement | undefined>;
                    text: import("vue").Ref<any>;
                    isLocked: import("vue").Ref<boolean>;
                    active: import("vue").Ref<boolean>;
                    imageRef: import("vue").Ref<HTMLDivElement | undefined>;
                    imgList: import("vue").Ref<string[] | undefined> | undefined;
                    minHeight: import("vue").ComputedRef<string>;
                    padding: import("vue").ComputedRef<"4px 10px" | "8px 12px">;
                    emit: {
                        (e: "update:modelValue", val: string): void;
                        (e: "input", event: Event): void;
                        (e: "focus", event: Event): void;
                        (e: "blur", event: Event): void;
                        (e: "submit"): void;
                    };
                    onFocus: (event: Event) => void;
                    onBlur: (event: Event) => void;
                    onInput: (event: Event) => void;
                    addText: (val: string) => void;
                    clear: () => void;
                    focus: () => void;
                    keyDown: (e: KeyboardEvent) => void;
                    removeImg: (val: number) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "update:modelValue" | "input" | "focus" | "blur")[], string, {
                    minHeight: number;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                placeholder: {
                    type: StringConstructor;
                    required: false;
                };
                modelValue: {
                    type: StringConstructor;
                    required: true;
                };
                minHeight: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                imgList: {
                    type: ArrayConstructor;
                    required: false;
                };
            }>> & {
                onSubmit?: ((...args: any[]) => any) | undefined;
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onInput?: ((...args: any[]) => any) | undefined;
                onFocus?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                props: {
                    placeholder?: string | undefined;
                    modelValue: string;
                    minHeight: number;
                    imgList?: string[] | undefined;
                };
                range: import("vue").Ref<Range | undefined>;
                editorRef: import("vue").Ref<HTMLDivElement | undefined>;
                text: import("vue").Ref<any>;
                isLocked: import("vue").Ref<boolean>;
                active: import("vue").Ref<boolean>;
                imageRef: import("vue").Ref<HTMLDivElement | undefined>;
                imgList: import("vue").Ref<string[] | undefined> | undefined;
                minHeight: import("vue").ComputedRef<string>;
                padding: import("vue").ComputedRef<"4px 10px" | "8px 12px">;
                emit: {
                    (e: "update:modelValue", val: string): void;
                    (e: "input", event: Event): void;
                    (e: "focus", event: Event): void;
                    (e: "blur", event: Event): void;
                    (e: "submit"): void;
                };
                onFocus: (event: Event) => void;
                onBlur: (event: Event) => void;
                onInput: (event: Event) => void;
                addText: (val: string) => void;
                clear: () => void;
                focus: () => void;
                keyDown: (e: KeyboardEvent) => void;
                removeImg: (val: number) => void;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            popperRef: import("vue").Ref<any>;
            inputRef: import("vue").Ref<HTMLInputElement | undefined>;
            imgList: import("vue").Ref<string[]>;
            files2: import("vue").Ref<any[]>;
            state: {
                imgLength: number;
            };
            input: (e: Event) => void;
            emit: {
                (e: "hide", event: Event): void;
                (e: "close"): void;
            };
            submit: (obj: import('../../../index').CommentSubmitParam2) => void;
            emoji: import('../../../index').EmojiApi | undefined;
            onSubmit: () => void;
            onClickOutside: (event: Event) => void;
            onFocus: () => void;
            createObjectURL: (blob: any) => string;
            change: (val: Event) => void;
            vClickOutside: import("vue").ObjectDirective<any, any>;
            ElButton: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                readonly icon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                readonly loading: BooleanConstructor;
                readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                readonly plain: BooleanConstructor;
                readonly text: BooleanConstructor;
                readonly link: BooleanConstructor;
                readonly bg: BooleanConstructor;
                readonly autofocus: BooleanConstructor;
                readonly round: BooleanConstructor;
                readonly circle: BooleanConstructor;
                readonly color: StringConstructor;
                readonly dark: BooleanConstructor;
                readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly disabled: BooleanConstructor;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    readonly icon: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                    readonly loading: BooleanConstructor;
                    readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                    readonly plain: BooleanConstructor;
                    readonly text: BooleanConstructor;
                    readonly link: BooleanConstructor;
                    readonly bg: BooleanConstructor;
                    readonly autofocus: BooleanConstructor;
                    readonly round: BooleanConstructor;
                    readonly circle: BooleanConstructor;
                    readonly color: StringConstructor;
                    readonly dark: BooleanConstructor;
                    readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                }>> & {
                    onClick?: ((evt: MouseEvent) => any) | undefined;
                }>>;
                emit: (event: "click", evt: MouseEvent) => void;
                slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                buttonGroupContext: import("element-plus").ButtonGroupContext | undefined;
                globalConfig: import("vue").Ref<import("element-plus").ButtonConfigContext | undefined>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                form: import("element-plus").FormContext | undefined;
                _size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
                _disabled: import("vue").ComputedRef<boolean>;
                _ref: import("vue").Ref<HTMLButtonElement | undefined>;
                _type: import("vue").ComputedRef<"" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger">;
                autoInsertSpace: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                shouldAddSpace: import("vue").ComputedRef<boolean>;
                buttonStyle: import("vue").ComputedRef<Record<string, string>>;
                handleClick: (evt: MouseEvent) => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (evt: MouseEvent) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                readonly icon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly nativeType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "submit" | "button" | "reset", unknown, "button", boolean>;
                readonly loading: BooleanConstructor;
                readonly loadingIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
                readonly plain: BooleanConstructor;
                readonly text: BooleanConstructor;
                readonly link: BooleanConstructor;
                readonly bg: BooleanConstructor;
                readonly autofocus: BooleanConstructor;
                readonly round: BooleanConstructor;
                readonly circle: BooleanConstructor;
                readonly color: StringConstructor;
                readonly dark: BooleanConstructor;
                readonly autoInsertSpace: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            }>> & {
                onClick?: ((evt: MouseEvent) => any) | undefined;
            }, {
                readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
                readonly text: boolean;
                readonly nativeType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "submit" | "button" | "reset", unknown>;
                readonly loadingIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
                readonly autoInsertSpace: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly disabled: boolean;
                readonly loading: boolean;
                readonly plain: boolean;
                readonly link: boolean;
                readonly bg: boolean;
                readonly autofocus: boolean;
                readonly round: boolean;
                readonly circle: boolean;
                readonly dark: boolean;
            }>> & {
                ButtonGroup: import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, "", boolean>;
                }>>, {
                    readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>;
                }>;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "close")[], "hide" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            placeholder: {
                type: StringConstructor;
                required: true;
            };
            contentBtn: {
                type: StringConstructor;
                required: true;
            };
            parentId: {
                type: StringConstructor;
                required: false;
            };
            replay: {
                type: StringConstructor;
                required: false;
            };
        }>> & {
            onHide?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }, {}>;
        UFold: import('../../../index').SFCWithInstall<import("vue").DefineComponent<{
            line: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
                default: number;
            };
            unfold: {
                type: BooleanConstructor;
                required: false;
            };
        }, {
            props: {
                line: string | number;
                unfold?: boolean | undefined;
            };
            line: import("vue").ComputedRef<number>;
            fold: import("vue").Ref<boolean>;
            isOver: import("vue").Ref<boolean>;
            divBox: import("vue").Ref<HTMLDivElement | undefined>;
            observer: ResizeObserver;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            line: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
                default: number;
            };
            unfold: {
                type: BooleanConstructor;
                required: false;
            };
        }>>, {
            line: string | number;
            unfold: boolean;
        }>> & Record<string, any>;
        UIcon: import('../../../index').SFCWithInstall<import("vue").DefineComponent<{
            name: {
                type: StringConstructor;
                required: false;
            };
            size: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
            };
            color: {
                type: StringConstructor;
                required: false;
            };
        }, {
            props: {
                name?: string | undefined;
                size?: string | number | undefined;
                color?: string | undefined;
            };
            name: import("vue").ComputedRef<string>;
            style: import("vue").ComputedRef<{
                fontSize: string | number | undefined;
                color: string | undefined;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: false;
            };
            size: {
                type: (NumberConstructor | StringConstructor)[];
                required: false;
            };
            color: {
                type: StringConstructor;
                required: false;
            };
        }>>, {}>> & Record<string, any>;
        ElAvatar: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number, "", boolean>;
            readonly shape: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
            readonly icon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly alt: StringConstructor;
            readonly srcSet: StringConstructor;
            readonly fit: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty) | ((new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number, "", boolean>;
                readonly shape: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
                readonly icon: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly alt: StringConstructor;
                readonly srcSet: StringConstructor;
                readonly fit: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty) | ((new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
            }>> & {
                onError?: ((evt: Event) => any) | undefined;
            }>>;
            emit: (event: "error", evt: Event) => void;
            ns: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            hasLoadError: import("vue").Ref<boolean>;
            avatarClass: import("vue").ComputedRef<string[]>;
            sizeStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
            fitStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            handleError: (e: Event) => void;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {}>> & Record<string, any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            error: (evt: Event) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").EpPropFinalized<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number, "", boolean>;
            readonly shape: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "square", unknown, "circle", boolean>;
            readonly icon: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly alt: StringConstructor;
            readonly srcSet: StringConstructor;
            readonly fit: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty) | ((new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty))[], unknown, unknown, "cover", boolean>;
        }>> & {
            onError?: ((evt: Event) => any) | undefined;
        }, {
            readonly size: import("element-plus/es/utils").EpPropMergeType<readonly [NumberConstructor, StringConstructor], "" | "small" | "default" | "large", number>;
            readonly shape: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "circle" | "square", unknown>;
            readonly src: string;
            readonly fit: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty) | ((new (...args: any[]) => import("csstype").ObjectFitProperty & {}) | (() => import("csstype").ObjectFitProperty))[], unknown, unknown>;
        }>> & Record<string, any>;
        UserInfo: import("vue").DefineComponent<{
            isUserInfo: {
                type: BooleanConstructor;
                required: true;
            };
            uid: {
                type: StringConstructor;
                required: true;
            };
        }, {
            props: {
                isUserInfo: boolean;
                uid: string;
            };
            getUser: (uid: string, show: Function) => void;
            show: () => void;
            ElPopover: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown, "hover", boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement) | ((new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement))[], unknown, unknown, "bottom", boolean>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                readonly autoClose: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly persistent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly 'onUpdate:visible': {
                    readonly type: import("vue").PropType<(visible: boolean) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown, "hover", boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement) | ((new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement))[], unknown, unknown, "bottom", boolean>;
                    readonly disabled: BooleanConstructor;
                    readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly tabindex: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
                    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly enterable: {
                        readonly default: true;
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        readonly __epPropKey: true;
                    };
                    readonly effect: {
                        readonly default: "light";
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        readonly __epPropKey: true;
                    };
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly title: StringConstructor;
                    readonly width: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
                    readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                    readonly autoClose: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly persistent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly 'onUpdate:visible': {
                        readonly type: import("vue").PropType<(visible: boolean) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
                    "onBefore-enter"?: (() => any) | undefined;
                    "onBefore-leave"?: (() => any) | undefined;
                    "onAfter-enter"?: (() => any) | undefined;
                    "onAfter-leave"?: (() => any) | undefined;
                }>>;
                emit: ((event: "update:visible", value: boolean) => void) & ((event: "before-enter") => void) & ((event: "before-leave") => void) & ((event: "after-enter") => void) & ((event: "after-leave") => void);
                updateEventKeyRaw: "onUpdate:visible";
                onUpdateVisible: import("vue").ComputedRef<(((visible: boolean) => void) & ((value: boolean) => any)) | undefined>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                tooltipRef: import("vue").Ref<any>;
                popperRef: import("vue").ComputedRef<any>;
                style: import("vue").ComputedRef<import("vue").StyleValue[]>;
                kls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | any[] | {
                    [x: string]: boolean;
                })[])[])[])[])[])[])[])[])[])[])[]>;
                gpuAcceleration: import("vue").ComputedRef<boolean>;
                hide: () => void;
                beforeEnter: () => void;
                beforeLeave: () => void;
                afterEnter: () => void;
                afterLeave: () => void;
                ElTooltip: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    openDelay: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    visibleArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                    hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
                    showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
                    arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown, "hover", boolean>;
                    triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                    virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    pure: BooleanConstructor;
                    focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    "onUpdate:visible": {
                        readonly type: import("vue").PropType<(val: boolean) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                }, {
                    compatShowAfter: import("vue").ComputedRef<number>;
                    compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    popperRef: import("vue").Ref<({
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: Partial<{
                            readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown>;
                        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                            readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "role">;
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot | undefined;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                            readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                        }>>, {
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            triggerRef: import("vue").Ref<HTMLElement | undefined>;
                            popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: import("vue").Ref<HTMLElement | undefined>;
                            referenceRef: import("vue").Ref<HTMLElement | undefined>;
                            role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown>>;
                            popperProvides: import("element-plus").ElPopperInjectionContext;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                            readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown>;
                        }> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{
                        readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                    }>> & import("vue").ShallowUnwrapRef<{
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        triggerRef: import("vue").Ref<HTMLElement | undefined>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        referenceRef: import("vue").Ref<HTMLElement | undefined>;
                        role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown>>;
                        popperProvides: import("element-plus").ElPopperInjectionContext;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    contentRef: import("vue").Ref<({
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: Partial<{
                            readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                            readonly offset: number;
                            readonly effect: string;
                            readonly showAfter: number;
                            readonly hideAfter: number;
                            readonly boundariesPadding: number;
                            readonly fallbackPlacements: import("element-plus").Placement[];
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly popperOptions: Partial<import("element-plus").Options>;
                            readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                            readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                            readonly pure: boolean;
                            readonly virtualTriggering: boolean;
                            readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                            readonly content: string;
                            readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly transition: string;
                            readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly persistent: boolean;
                        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                            readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                            readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                            readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly persistent: BooleanConstructor;
                            readonly ariaLabel: StringConstructor;
                            readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                            readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                            readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly disabled: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                            readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "visible" | "transition" | "popperOptions" | "content" | "enterable" | "effect" | "teleported" | "offset" | "showAfter" | "hideAfter" | "persistent" | "strategy" | "gpuAcceleration" | "virtualTriggering" | "appendTo" | "rawContent" | "pure" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements">;
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot | undefined;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                            readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                            readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                            readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly persistent: BooleanConstructor;
                            readonly ariaLabel: StringConstructor;
                            readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                            readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                            readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly disabled: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                            readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                        }>>, {
                            ariaHidden: import("vue").ComputedRef<boolean>;
                            entering: import("vue").Ref<boolean>;
                            leaving: import("vue").Ref<boolean>;
                            id: import("vue").Ref<string>;
                            intermediateOpen: import("vue").Ref<boolean>;
                            contentStyle: import("vue").ComputedRef<any>;
                            contentRef: import("vue").Ref<({
                                $: import("vue").ComponentInternalInstance;
                                $data: {};
                                $props: Partial<{
                                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                                    readonly offset: number;
                                    readonly effect: string;
                                    readonly boundariesPadding: number;
                                    readonly fallbackPlacements: import("element-plus").Placement[];
                                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly popperOptions: Partial<import("element-plus").Options>;
                                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly ariaLabel: string;
                                    readonly visible: boolean;
                                    readonly pure: boolean;
                                    readonly virtualTriggering: boolean;
                                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                                    readonly id: StringConstructor;
                                    readonly style: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly className: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                    readonly visible: BooleanConstructor;
                                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly pure: BooleanConstructor;
                                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly popperClass: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly popperStyle: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly referenceEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly triggerTargetEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                    readonly virtualTriggering: BooleanConstructor;
                                    readonly zIndex: NumberConstructor;
                                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                                }>> & {
                                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "visible" | "popperOptions" | "enterable" | "effect" | "offset" | "strategy" | "gpuAcceleration" | "ariaLabel" | "virtualTriggering" | "pure" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements">;
                                $attrs: {
                                    [x: string]: unknown;
                                };
                                $refs: {
                                    [x: string]: unknown;
                                };
                                $slots: Readonly<{
                                    [name: string]: import("vue").Slot | undefined;
                                }>;
                                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                                $emit: (event: string, ...args: any[]) => void;
                                $el: any;
                                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                                    readonly id: StringConstructor;
                                    readonly style: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly className: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                    readonly visible: BooleanConstructor;
                                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly pure: BooleanConstructor;
                                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly popperClass: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly popperStyle: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly referenceEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly triggerTargetEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                    readonly virtualTriggering: BooleanConstructor;
                                    readonly zIndex: NumberConstructor;
                                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                                }>> & {
                                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                                }, {
                                    emit: (event: string, ...args: any[]) => void;
                                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                        readonly id: StringConstructor;
                                        readonly style: {
                                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                            readonly required: false;
                                            readonly validator: ((val: unknown) => boolean) | undefined;
                                            __epPropKey: true;
                                        };
                                        readonly className: {
                                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                            readonly required: false;
                                            readonly validator: ((val: unknown) => boolean) | undefined;
                                            __epPropKey: true;
                                        };
                                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                        readonly visible: BooleanConstructor;
                                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                        readonly pure: BooleanConstructor;
                                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                        readonly popperClass: {
                                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | {
                                                [x: string]: boolean;
                                            } | (string | any[] | {
                                                [x: string]: boolean;
                                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                            readonly required: false;
                                            readonly validator: ((val: unknown) => boolean) | undefined;
                                            __epPropKey: true;
                                        };
                                        readonly popperStyle: {
                                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                            readonly required: false;
                                            readonly validator: ((val: unknown) => boolean) | undefined;
                                            __epPropKey: true;
                                        };
                                        readonly referenceEl: {
                                            readonly type: import("vue").PropType<HTMLElement>;
                                            readonly required: false;
                                            readonly validator: ((val: unknown) => boolean) | undefined;
                                            __epPropKey: true;
                                        };
                                        readonly triggerTargetEl: {
                                            readonly type: import("vue").PropType<HTMLElement>;
                                            readonly required: false;
                                            readonly validator: ((val: unknown) => boolean) | undefined;
                                            __epPropKey: true;
                                        };
                                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                        readonly virtualTriggering: BooleanConstructor;
                                        readonly zIndex: NumberConstructor;
                                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                                    }>> & {
                                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                                    }>>;
                                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                                    triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                                    role: import("vue").ComputedRef<string>;
                                    formItemContext: import("element-plus").FormItemContext | undefined;
                                    nextZIndex: () => number;
                                    ns: {
                                        namespace: import("vue").Ref<string>;
                                        b: (blockSuffix?: string | undefined) => string;
                                        e: (element?: string | undefined) => string;
                                        m: (modifier?: string | undefined) => string;
                                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                        is: {
                                            (name: string, state: boolean | undefined): string;
                                            (name: string): string;
                                        };
                                        cssVar: (object: Record<string, string>) => Record<string, string>;
                                        cssVarName: (name: string) => string;
                                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                        cssVarBlockName: (name: string) => string;
                                    };
                                    popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                                    focusStartRef: import("vue").Ref<string | HTMLElement>;
                                    arrowRef: import("vue").Ref<HTMLElement | undefined>;
                                    arrowOffset: import("vue").Ref<number | undefined>;
                                    contentZIndex: import("vue").Ref<number>;
                                    trapped: import("vue").Ref<boolean>;
                                    triggerTargetAriaStopWatch: undefined;
                                    computedReference: import("vue").ComputedRef<import("element-plus").Measurable | undefined>;
                                    contentStyle: import("vue").ComputedRef<any>;
                                    contentClass: import("vue").ComputedRef<(string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                                    ariaModal: import("vue").ComputedRef<string | undefined>;
                                    createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                                        referenceEl: any;
                                        popperContentEl: any;
                                        arrowEl: any;
                                    }) => import("@popperjs/core").Instance;
                                    updatePopper: (shouldUpdateZIndex?: boolean | undefined) => void;
                                    togglePopperAlive: () => void;
                                    onFocusAfterTrapped: () => void;
                                    onFocusAfterReleased: () => void;
                                    onFocusInTrap: (event: FocusEvent) => void;
                                    onFocusoutPrevented: () => void;
                                    onReleaseRequested: () => void;
                                    ElFocusTrap: import("vue").DefineComponent<{
                                        loop: BooleanConstructor;
                                        trapped: BooleanConstructor;
                                        focusTrapEl: import("vue").PropType<HTMLElement>;
                                        focusStartEl: {
                                            type: import("vue").PropType<HTMLElement | "container" | "first">;
                                            default: string;
                                        };
                                    }, {
                                        onKeydown: (e: KeyboardEvent) => void;
                                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested")[], "focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                                        loop: BooleanConstructor;
                                        trapped: BooleanConstructor;
                                        focusTrapEl: import("vue").PropType<HTMLElement>;
                                        focusStartEl: {
                                            type: import("vue").PropType<HTMLElement | "container" | "first">;
                                            default: string;
                                        };
                                    }>> & {
                                        onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
                                        onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
                                        onFocusin?: ((...args: any[]) => any) | undefined;
                                        onFocusout?: ((...args: any[]) => any) | undefined;
                                        "onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
                                        "onRelease-requested"?: ((...args: any[]) => any) | undefined;
                                    }, {
                                        loop: boolean;
                                        trapped: boolean;
                                        focusStartEl: HTMLElement | "container" | "first";
                                    }>;
                                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                                    readonly offset: number;
                                    readonly effect: string;
                                    readonly boundariesPadding: number;
                                    readonly fallbackPlacements: import("element-plus").Placement[];
                                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly popperOptions: Partial<import("element-plus").Options>;
                                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                    readonly ariaLabel: string;
                                    readonly visible: boolean;
                                    readonly pure: boolean;
                                    readonly virtualTriggering: boolean;
                                }> & {
                                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                                    created?: (() => void) | (() => void)[] | undefined;
                                    beforeMount?: (() => void) | (() => void)[] | undefined;
                                    mounted?: (() => void) | (() => void)[] | undefined;
                                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                                    updated?: (() => void) | (() => void)[] | undefined;
                                    activated?: (() => void) | (() => void)[] | undefined;
                                    deactivated?: (() => void) | (() => void)[] | undefined;
                                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                                    destroyed?: (() => void) | (() => void)[] | undefined;
                                    unmounted?: (() => void) | (() => void)[] | undefined;
                                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                                };
                                $forceUpdate: () => void;
                                $nextTick: typeof import("vue").nextTick;
                                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                            } & Readonly<import("vue").ExtractPropTypes<{
                                readonly id: StringConstructor;
                                readonly style: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly className: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                readonly visible: BooleanConstructor;
                                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly pure: BooleanConstructor;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly popperClass: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly popperStyle: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly referenceEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly triggerTargetEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                readonly virtualTriggering: BooleanConstructor;
                                readonly zIndex: NumberConstructor;
                                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                            } & import("vue").ShallowUnwrapRef<{
                                emit: (event: string, ...args: any[]) => void;
                                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                    readonly id: StringConstructor;
                                    readonly style: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly className: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                    readonly visible: BooleanConstructor;
                                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly pure: BooleanConstructor;
                                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly popperClass: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly popperStyle: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly referenceEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly triggerTargetEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                    readonly virtualTriggering: BooleanConstructor;
                                    readonly zIndex: NumberConstructor;
                                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                                }>> & {
                                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                                }>>;
                                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                                contentRef: import("vue").Ref<HTMLElement | undefined>;
                                triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                                role: import("vue").ComputedRef<string>;
                                formItemContext: import("element-plus").FormItemContext | undefined;
                                nextZIndex: () => number;
                                ns: {
                                    namespace: import("vue").Ref<string>;
                                    b: (blockSuffix?: string | undefined) => string;
                                    e: (element?: string | undefined) => string;
                                    m: (modifier?: string | undefined) => string;
                                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                    is: {
                                        (name: string, state: boolean | undefined): string;
                                        (name: string): string;
                                    };
                                    cssVar: (object: Record<string, string>) => Record<string, string>;
                                    cssVarName: (name: string) => string;
                                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                    cssVarBlockName: (name: string) => string;
                                };
                                popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                                focusStartRef: import("vue").Ref<string | HTMLElement>;
                                arrowRef: import("vue").Ref<HTMLElement | undefined>;
                                arrowOffset: import("vue").Ref<number | undefined>;
                                contentZIndex: import("vue").Ref<number>;
                                trapped: import("vue").Ref<boolean>;
                                triggerTargetAriaStopWatch: undefined;
                                computedReference: import("vue").ComputedRef<import("element-plus").Measurable | undefined>;
                                contentStyle: import("vue").ComputedRef<any>;
                                contentClass: import("vue").ComputedRef<(string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                                ariaModal: import("vue").ComputedRef<string | undefined>;
                                createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                                    referenceEl: any;
                                    popperContentEl: any;
                                    arrowEl: any;
                                }) => import("@popperjs/core").Instance;
                                updatePopper: (shouldUpdateZIndex?: boolean | undefined) => void;
                                togglePopperAlive: () => void;
                                onFocusAfterTrapped: () => void;
                                onFocusAfterReleased: () => void;
                                onFocusInTrap: (event: FocusEvent) => void;
                                onFocusoutPrevented: () => void;
                                onReleaseRequested: () => void;
                                ElFocusTrap: import("vue").DefineComponent<{
                                    loop: BooleanConstructor;
                                    trapped: BooleanConstructor;
                                    focusTrapEl: import("vue").PropType<HTMLElement>;
                                    focusStartEl: {
                                        type: import("vue").PropType<HTMLElement | "container" | "first">;
                                        default: string;
                                    };
                                }, {
                                    onKeydown: (e: KeyboardEvent) => void;
                                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested")[], "focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                                    loop: BooleanConstructor;
                                    trapped: BooleanConstructor;
                                    focusTrapEl: import("vue").PropType<HTMLElement>;
                                    focusStartEl: {
                                        type: import("vue").PropType<HTMLElement | "container" | "first">;
                                        default: string;
                                    };
                                }>> & {
                                    onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
                                    onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
                                    onFocusin?: ((...args: any[]) => any) | undefined;
                                    onFocusout?: ((...args: any[]) => any) | undefined;
                                    "onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
                                    "onRelease-requested"?: ((...args: any[]) => any) | undefined;
                                }, {
                                    loop: boolean;
                                    trapped: boolean;
                                    focusStartEl: HTMLElement | "container" | "first";
                                }>;
                            }> & import("vue").ComponentCustomProperties) | null>;
                            destroyed: import("vue").Ref<boolean>;
                            shouldRender: import("vue").ComputedRef<boolean>;
                            shouldShow: import("vue").ComputedRef<boolean>;
                            onClose: (e?: Event | undefined) => void;
                            open: import("vue").Ref<boolean>;
                            onAfterShow: () => void;
                            onBeforeEnter: () => void;
                            onBeforeLeave: () => void;
                            onContentEnter: (event: unknown) => void;
                            onContentLeave: (event: unknown) => void;
                            onTransitionLeave: () => void;
                            onBlur: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                            readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                            readonly offset: number;
                            readonly effect: string;
                            readonly showAfter: number;
                            readonly hideAfter: number;
                            readonly boundariesPadding: number;
                            readonly fallbackPlacements: import("element-plus").Placement[];
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly popperOptions: Partial<import("element-plus").Options>;
                            readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                            readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                            readonly pure: boolean;
                            readonly virtualTriggering: boolean;
                            readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                            readonly content: string;
                            readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly transition: string;
                            readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly persistent: boolean;
                        }> & {
                            beforeCreate?: (() => void) | (() => void)[] | undefined;
                            created?: (() => void) | (() => void)[] | undefined;
                            beforeMount?: (() => void) | (() => void)[] | undefined;
                            mounted?: (() => void) | (() => void)[] | undefined;
                            beforeUpdate?: (() => void) | (() => void)[] | undefined;
                            updated?: (() => void) | (() => void)[] | undefined;
                            activated?: (() => void) | (() => void)[] | undefined;
                            deactivated?: (() => void) | (() => void)[] | undefined;
                            beforeDestroy?: (() => void) | (() => void)[] | undefined;
                            beforeUnmount?: (() => void) | (() => void)[] | undefined;
                            destroyed?: (() => void) | (() => void)[] | undefined;
                            unmounted?: (() => void) | (() => void)[] | undefined;
                            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{
                        readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                        readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly persistent: BooleanConstructor;
                        readonly ariaLabel: StringConstructor;
                        readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                        readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                        readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly disabled: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: import("vue").PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                        readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                    }>> & import("vue").ShallowUnwrapRef<{
                        ariaHidden: import("vue").ComputedRef<boolean>;
                        entering: import("vue").Ref<boolean>;
                        leaving: import("vue").Ref<boolean>;
                        id: import("vue").Ref<string>;
                        intermediateOpen: import("vue").Ref<boolean>;
                        contentStyle: import("vue").ComputedRef<any>;
                        contentRef: import("vue").Ref<({
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: Partial<{
                                readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                                readonly offset: number;
                                readonly effect: string;
                                readonly boundariesPadding: number;
                                readonly fallbackPlacements: import("element-plus").Placement[];
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly popperOptions: Partial<import("element-plus").Options>;
                                readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                                readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly ariaLabel: string;
                                readonly visible: boolean;
                                readonly pure: boolean;
                                readonly virtualTriggering: boolean;
                            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                                readonly id: StringConstructor;
                                readonly style: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly className: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                readonly visible: BooleanConstructor;
                                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly pure: BooleanConstructor;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly popperClass: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly popperStyle: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly referenceEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly triggerTargetEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                readonly virtualTriggering: BooleanConstructor;
                                readonly zIndex: NumberConstructor;
                                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "visible" | "popperOptions" | "enterable" | "effect" | "offset" | "strategy" | "gpuAcceleration" | "ariaLabel" | "virtualTriggering" | "pure" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "boundariesPadding" | "fallbackPlacements">;
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot | undefined;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                                readonly id: StringConstructor;
                                readonly style: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly className: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                readonly visible: BooleanConstructor;
                                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly pure: BooleanConstructor;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly popperClass: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly popperStyle: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly referenceEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly triggerTargetEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                readonly virtualTriggering: BooleanConstructor;
                                readonly zIndex: NumberConstructor;
                                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                            }, {
                                emit: (event: string, ...args: any[]) => void;
                                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                    readonly id: StringConstructor;
                                    readonly style: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly className: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                    readonly visible: BooleanConstructor;
                                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly pure: BooleanConstructor;
                                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                    readonly popperClass: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | {
                                            [x: string]: boolean;
                                        } | (string | any[] | {
                                            [x: string]: boolean;
                                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly popperStyle: {
                                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly referenceEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly triggerTargetEl: {
                                        readonly type: import("vue").PropType<HTMLElement>;
                                        readonly required: false;
                                        readonly validator: ((val: unknown) => boolean) | undefined;
                                        __epPropKey: true;
                                    };
                                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                    readonly virtualTriggering: BooleanConstructor;
                                    readonly zIndex: NumberConstructor;
                                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                                }>> & {
                                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                                }>>;
                                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                                contentRef: import("vue").Ref<HTMLElement | undefined>;
                                triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                                role: import("vue").ComputedRef<string>;
                                formItemContext: import("element-plus").FormItemContext | undefined;
                                nextZIndex: () => number;
                                ns: {
                                    namespace: import("vue").Ref<string>;
                                    b: (blockSuffix?: string | undefined) => string;
                                    e: (element?: string | undefined) => string;
                                    m: (modifier?: string | undefined) => string;
                                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                    is: {
                                        (name: string, state: boolean | undefined): string;
                                        (name: string): string;
                                    };
                                    cssVar: (object: Record<string, string>) => Record<string, string>;
                                    cssVarName: (name: string) => string;
                                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                    cssVarBlockName: (name: string) => string;
                                };
                                popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                                focusStartRef: import("vue").Ref<string | HTMLElement>;
                                arrowRef: import("vue").Ref<HTMLElement | undefined>;
                                arrowOffset: import("vue").Ref<number | undefined>;
                                contentZIndex: import("vue").Ref<number>;
                                trapped: import("vue").Ref<boolean>;
                                triggerTargetAriaStopWatch: undefined;
                                computedReference: import("vue").ComputedRef<import("element-plus").Measurable | undefined>;
                                contentStyle: import("vue").ComputedRef<any>;
                                contentClass: import("vue").ComputedRef<(string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                                ariaModal: import("vue").ComputedRef<string | undefined>;
                                createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                                    referenceEl: any;
                                    popperContentEl: any;
                                    arrowEl: any;
                                }) => import("@popperjs/core").Instance;
                                updatePopper: (shouldUpdateZIndex?: boolean | undefined) => void;
                                togglePopperAlive: () => void;
                                onFocusAfterTrapped: () => void;
                                onFocusAfterReleased: () => void;
                                onFocusInTrap: (event: FocusEvent) => void;
                                onFocusoutPrevented: () => void;
                                onReleaseRequested: () => void;
                                ElFocusTrap: import("vue").DefineComponent<{
                                    loop: BooleanConstructor;
                                    trapped: BooleanConstructor;
                                    focusTrapEl: import("vue").PropType<HTMLElement>;
                                    focusStartEl: {
                                        type: import("vue").PropType<HTMLElement | "container" | "first">;
                                        default: string;
                                    };
                                }, {
                                    onKeydown: (e: KeyboardEvent) => void;
                                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested")[], "focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                                    loop: BooleanConstructor;
                                    trapped: BooleanConstructor;
                                    focusTrapEl: import("vue").PropType<HTMLElement>;
                                    focusStartEl: {
                                        type: import("vue").PropType<HTMLElement | "container" | "first">;
                                        default: string;
                                    };
                                }>> & {
                                    onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
                                    onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
                                    onFocusin?: ((...args: any[]) => any) | undefined;
                                    onFocusout?: ((...args: any[]) => any) | undefined;
                                    "onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
                                    "onRelease-requested"?: ((...args: any[]) => any) | undefined;
                                }, {
                                    loop: boolean;
                                    trapped: boolean;
                                    focusStartEl: HTMLElement | "container" | "first";
                                }>;
                            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                                readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                                readonly offset: number;
                                readonly effect: string;
                                readonly boundariesPadding: number;
                                readonly fallbackPlacements: import("element-plus").Placement[];
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly popperOptions: Partial<import("element-plus").Options>;
                                readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                                readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                                readonly ariaLabel: string;
                                readonly visible: boolean;
                                readonly pure: boolean;
                                readonly virtualTriggering: boolean;
                            }> & {
                                beforeCreate?: (() => void) | (() => void)[] | undefined;
                                created?: (() => void) | (() => void)[] | undefined;
                                beforeMount?: (() => void) | (() => void)[] | undefined;
                                mounted?: (() => void) | (() => void)[] | undefined;
                                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                                updated?: (() => void) | (() => void)[] | undefined;
                                activated?: (() => void) | (() => void)[] | undefined;
                                deactivated?: (() => void) | (() => void)[] | undefined;
                                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                                destroyed?: (() => void) | (() => void)[] | undefined;
                                unmounted?: (() => void) | (() => void)[] | undefined;
                                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
                            };
                            $forceUpdate: () => void;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                        } & Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | any[] | {
                                    [x: string]: boolean;
                                })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: import("vue").PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                        } & import("vue").ShallowUnwrapRef<{
                            emit: (event: string, ...args: any[]) => void;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly id: StringConstructor;
                                readonly style: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly className: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                readonly visible: BooleanConstructor;
                                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly pure: BooleanConstructor;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly popperClass: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | any[] | {
                                        [x: string]: boolean;
                                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly popperStyle: {
                                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly referenceEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly triggerTargetEl: {
                                    readonly type: import("vue").PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                readonly virtualTriggering: BooleanConstructor;
                                readonly zIndex: NumberConstructor;
                                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                            }>>;
                            popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: import("vue").Ref<HTMLElement | undefined>;
                            triggerRef: import("vue").Ref<import("element-plus").Measurable | undefined>;
                            role: import("vue").ComputedRef<string>;
                            formItemContext: import("element-plus").FormItemContext | undefined;
                            nextZIndex: () => number;
                            ns: {
                                namespace: import("vue").Ref<string>;
                                b: (blockSuffix?: string | undefined) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                            focusStartRef: import("vue").Ref<string | HTMLElement>;
                            arrowRef: import("vue").Ref<HTMLElement | undefined>;
                            arrowOffset: import("vue").Ref<number | undefined>;
                            contentZIndex: import("vue").Ref<number>;
                            trapped: import("vue").Ref<boolean>;
                            triggerTargetAriaStopWatch: undefined;
                            computedReference: import("vue").ComputedRef<import("element-plus").Measurable | undefined>;
                            contentStyle: import("vue").ComputedRef<any>;
                            contentClass: import("vue").ComputedRef<(string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | any[] | {
                                [x: string]: boolean;
                            })[])[])[])[])[])[])[])[])[])[] | undefined)[]>;
                            ariaModal: import("vue").ComputedRef<string | undefined>;
                            createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                                referenceEl: any;
                                popperContentEl: any;
                                arrowEl: any;
                            }) => import("@popperjs/core").Instance;
                            updatePopper: (shouldUpdateZIndex?: boolean | undefined) => void;
                            togglePopperAlive: () => void;
                            onFocusAfterTrapped: () => void;
                            onFocusAfterReleased: () => void;
                            onFocusInTrap: (event: FocusEvent) => void;
                            onFocusoutPrevented: () => void;
                            onReleaseRequested: () => void;
                            ElFocusTrap: import("vue").DefineComponent<{
                                loop: BooleanConstructor;
                                trapped: BooleanConstructor;
                                focusTrapEl: import("vue").PropType<HTMLElement>;
                                focusStartEl: {
                                    type: import("vue").PropType<HTMLElement | "container" | "first">;
                                    default: string;
                                };
                            }, {
                                onKeydown: (e: KeyboardEvent) => void;
                            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested")[], "focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusout-prevented" | "release-requested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                                loop: BooleanConstructor;
                                trapped: BooleanConstructor;
                                focusTrapEl: import("vue").PropType<HTMLElement>;
                                focusStartEl: {
                                    type: import("vue").PropType<HTMLElement | "container" | "first">;
                                    default: string;
                                };
                            }>> & {
                                onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
                                onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
                                onFocusin?: ((...args: any[]) => any) | undefined;
                                onFocusout?: ((...args: any[]) => any) | undefined;
                                "onFocusout-prevented"?: ((...args: any[]) => any) | undefined;
                                "onRelease-requested"?: ((...args: any[]) => any) | undefined;
                            }, {
                                loop: boolean;
                                trapped: boolean;
                                focusStartEl: HTMLElement | "container" | "first";
                            }>;
                        }> & import("vue").ComponentCustomProperties) | null>;
                        destroyed: import("vue").Ref<boolean>;
                        shouldRender: import("vue").ComputedRef<boolean>;
                        shouldShow: import("vue").ComputedRef<boolean>;
                        onClose: (e?: Event | undefined) => void;
                        open: import("vue").Ref<boolean>;
                        onAfterShow: () => void;
                        onBeforeEnter: () => void;
                        onBeforeLeave: () => void;
                        onContentEnter: (event: unknown) => void;
                        onContentLeave: (event: unknown) => void;
                        onTransitionLeave: () => void;
                        onBlur: () => void;
                    }> & import("vue").ComponentCustomProperties) | null>;
                    open: import("vue").Ref<boolean>;
                    hide: (event?: Event | undefined) => void;
                    isFocusInsideContent: () => boolean | undefined;
                    updatePopper: () => void;
                    onOpen: (event?: Event | undefined) => void;
                    onClose: (event?: Event | undefined) => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "close" | "show" | "open" | "update:visible" | "before-show" | "before-hide")[], "hide" | "close" | "show" | "open" | "update:visible" | "before-show" | "before-hide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    openDelay: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    visibleArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                    hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
                    showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
                    arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
                    disabled: BooleanConstructor;
                    trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown, "hover", boolean>;
                    triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
                    virtualRef: {
                        readonly type: import("vue").PropType<import("element-plus").Measurable>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    virtualTriggering: BooleanConstructor;
                    onMouseenter: FunctionConstructor;
                    onMouseleave: FunctionConstructor;
                    onClick: FunctionConstructor;
                    onKeydown: FunctionConstructor;
                    onFocus: FunctionConstructor;
                    onBlur: FunctionConstructor;
                    onContextmenu: FunctionConstructor;
                    id: StringConstructor;
                    open: BooleanConstructor;
                    appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    persistent: BooleanConstructor;
                    ariaLabel: StringConstructor;
                    visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    style: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    className: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    pure: BooleanConstructor;
                    focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    popperClass: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | any[] | {
                            [x: string]: boolean;
                        })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    popperStyle: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    referenceEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    triggerTargetEl: {
                        readonly type: import("vue").PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    zIndex: NumberConstructor;
                    boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]) | ((new (...args: any[]) => import("element-plus").Placement[]) | (() => import("element-plus").Placement[]))[], unknown, unknown, undefined, boolean>;
                    gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("element-plus").Placement, unknown, "bottom", boolean>;
                    popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                    strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
                    showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    "onUpdate:visible": {
                        readonly type: import("vue").PropType<(val: boolean) => void>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown, "tooltip", boolean>;
                }>> & {
                    onClose?: ((...args: any[]) => any) | undefined;
                    onOpen?: ((...args: any[]) => any) | undefined;
                    onShow?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    "onBefore-show"?: ((...args: any[]) => any) | undefined;
                    "onBefore-hide"?: ((...args: any[]) => any) | undefined;
                }, {
                    disabled: boolean;
                    trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown>;
                    placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("element-plus").Placement, unknown>;
                    offset: number;
                    effect: string;
                    showAfter: number;
                    hideAfter: number;
                    boundariesPadding: number;
                    fallbackPlacements: import("element-plus").Placement[];
                    gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    popperOptions: Partial<import("element-plus").Options>;
                    strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                    enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                    pure: boolean;
                    virtualTriggering: boolean;
                    appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                    content: string;
                    rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    transition: string;
                    teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    persistent: boolean;
                    open: boolean;
                    role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "menu" | "listbox" | "grid" | "tooltip" | "tree", unknown>;
                    arrowOffset: number;
                    triggerKeys: string[];
                    visibleArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    showArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>> & Record<string, any>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:visible': (value: boolean) => boolean;
                'before-enter': () => boolean;
                'before-leave': () => boolean;
                'after-enter': () => boolean;
                'after-leave': () => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown, "hover", boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement) | ((new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement))[], unknown, unknown, "bottom", boolean>;
                readonly disabled: BooleanConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>) | ((new (...args: any[]) => Partial<import("element-plus").Options>) | (() => Partial<import("element-plus").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly tabindex: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly popperStyle: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperClass: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | any[] | {
                        [x: string]: boolean;
                    })[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly enterable: {
                    readonly default: true;
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly effect: {
                    readonly default: "light";
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    readonly __epPropKey: true;
                };
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly title: StringConstructor;
                readonly width: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 150, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, undefined, boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                readonly autoClose: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly persistent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly 'onUpdate:visible': {
                    readonly type: import("vue").PropType<(visible: boolean) => void>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & {
                "onUpdate:visible"?: ((value: boolean) => any) | undefined;
                "onBefore-enter"?: (() => any) | undefined;
                "onBefore-leave"?: (() => any) | undefined;
                "onAfter-enter"?: (() => any) | undefined;
                "onAfter-leave"?: (() => any) | undefined;
            }, {
                readonly disabled: boolean;
                readonly trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) | ((new (...args: any[]) => ("focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]) & {}) | (() => "focus" | "hover" | "click" | "contextmenu" | ("focus" | "hover" | "click" | "contextmenu")[]))[], unknown, unknown>;
                readonly placement: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement) | ((new (...args: any[]) => import("element-plus").Placement & {}) | (() => import("element-plus").Placement))[], unknown, unknown>;
                readonly offset: number;
                readonly width: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly effect: string;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly popperOptions: Partial<import("element-plus").Options>;
                readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                readonly content: string;
                readonly transition: string;
                readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly persistent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly tabindex: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>;
                readonly showArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly autoClose: number;
            }>> & {
                directive: import("element-plus/es/utils").SFCWithInstall<import("vue").ObjectDirective<any, any>>;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            isUserInfo: {
                type: BooleanConstructor;
                required: true;
            };
            uid: {
                type: StringConstructor;
                required: true;
            };
        }>>, {}>;
        Operation: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
        str: <T>(val: T) => string;
        ElImage: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly hideOnClickModal: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "fill" | "cover" | "contain" | "none" | "scale-down", unknown, "", boolean>;
            readonly loading: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly scrollContainer: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
            readonly previewTeleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly zIndex: {
                readonly type: import("vue").PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly hideOnClickModal: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "fill" | "cover" | "contain" | "none" | "scale-down", unknown, "", boolean>;
                readonly loading: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly scrollContainer: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
                readonly previewTeleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly zIndex: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }>> & {
                onClose?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                onError?: ((evt: Event) => any) | undefined;
                onLoad?: ((evt: Event) => any) | undefined;
                onSwitch?: ((val: number) => any) | undefined;
            }>>;
            emit: ((event: "error", evt: Event) => void) & ((event: "close") => void) & ((event: "show") => void) & ((event: "load", evt: Event) => void) & ((event: "switch", val: number) => void);
            prevOverflow: string;
            t: import("element-plus").Translator;
            ns: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            rawAttrs: {
                [x: string]: unknown;
            };
            attrs: import("vue").ComputedRef<Record<string, unknown>>;
            imageSrc: import("vue").Ref<string | undefined>;
            hasLoadError: import("vue").Ref<boolean>;
            isLoading: import("vue").Ref<boolean>;
            showViewer: import("vue").Ref<boolean>;
            container: import("vue").Ref<HTMLElement | undefined>;
            _scrollContainer: import("vue").Ref<Window | HTMLElement | undefined>;
            supportLoading: boolean;
            stopScrollListener: (() => void) | undefined;
            stopWheelListener: (() => void) | undefined;
            containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            imageStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            preview: import("vue").ComputedRef<boolean>;
            imageIndex: import("vue").ComputedRef<number>;
            isManual: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            loadImage: () => void;
            handleLoad: (event: Event) => void;
            handleError: (event: Event) => void;
            handleLazyLoad: () => void;
            lazyLoadHandler: () => void;
            addLazyLoadListener: () => Promise<void>;
            removeLazyLoadListener: () => void;
            wheelHandler: (e: WheelEvent) => false | undefined;
            clickHandler: () => void;
            closeViewer: () => void;
            switchViewer: (val: number) => void;
            ImageViewer: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly urlList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
                readonly zIndex: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideOnClickModal: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }, {
                modes: Record<"CONTAIN" | "ORIGINAL", import("element-plus").ImageViewerMode>;
                mousewheelEventName: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly urlList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
                    readonly zIndex: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly hideOnClickModal: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                }>> & {
                    onClose?: (() => any) | undefined;
                    onSwitch?: ((index: number) => any) | undefined;
                }>>;
                emit: ((event: "close") => void) & ((event: "switch", index: number) => void);
                t: import("element-plus").Translator;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                nextZIndex: () => number;
                wrapper: import("vue").Ref<HTMLDivElement | undefined>;
                imgRefs: import("vue").Ref<HTMLImageElement[]>;
                scopeEventListener: import("vue").EffectScope;
                loading: import("vue").Ref<boolean>;
                activeIndex: import("vue").Ref<number>;
                mode: import("vue").ShallowRef<import("element-plus").ImageViewerMode>;
                transform: import("vue").Ref<{
                    scale: number;
                    deg: number;
                    offsetX: number;
                    offsetY: number;
                    enableTransition: boolean;
                }>;
                isSingle: import("vue").ComputedRef<boolean>;
                isFirst: import("vue").ComputedRef<boolean>;
                isLast: import("vue").ComputedRef<boolean>;
                currentImg: import("vue").ComputedRef<string>;
                imgStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                computedZIndex: import("vue").ComputedRef<number>;
                hide: () => void;
                registerEventListener: () => void;
                unregisterEventListener: () => void;
                handleImgLoad: () => void;
                handleImgError: (e: Event) => void;
                handleMouseDown: (e: MouseEvent) => void;
                reset: () => void;
                toggleMode: () => void;
                setActiveItem: (index: number) => void;
                prev: () => void;
                next: () => void;
                handleActions: (action: import("element-plus").ImageViewerAction, options?: {} | undefined) => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
                ArrowLeft: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                ArrowRight: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Close: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                RefreshLeft: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                RefreshRight: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                ZoomIn: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                ZoomOut: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                close: () => boolean;
                switch: (index: number) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly urlList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
                readonly zIndex: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideOnClickModal: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }>> & {
                onClose?: (() => any) | undefined;
                onSwitch?: ((index: number) => any) | undefined;
            }, {
                readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly initialIndex: number;
                readonly closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly hideOnClickModal: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly urlList: string[];
            }>> & Record<string, any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            load: (evt: Event) => boolean;
            error: (evt: Event) => boolean;
            switch: (val: number) => boolean;
            close: () => boolean;
            show: () => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly hideOnClickModal: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "fill" | "cover" | "contain" | "none" | "scale-down", unknown, "", boolean>;
            readonly loading: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly scrollContainer: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => (string | HTMLElement | undefined) & {}) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
            readonly previewTeleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly zIndex: {
                readonly type: import("vue").PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onClose?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            onError?: ((evt: Event) => any) | undefined;
            onLoad?: ((evt: Event) => any) | undefined;
            onSwitch?: ((val: number) => any) | undefined;
        }, {
            readonly lazy: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly src: string;
            readonly fit: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "fill" | "cover" | "contain" | "none" | "scale-down", unknown>;
            readonly initialIndex: number;
            readonly closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideOnClickModal: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly previewSrcList: string[];
            readonly previewTeleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        small: {
            type: BooleanConstructor;
            required: false;
        };
        data: {
            type: null;
            required: true;
        };
        parentId: {
            type: StringConstructor;
            required: true;
        };
    }>>, {
        small: boolean;
    }>;
    ElPagination: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly total: NumberConstructor;
        readonly pageSize: NumberConstructor;
        readonly defaultPageSize: NumberConstructor;
        readonly currentPage: NumberConstructor;
        readonly defaultCurrentPage: NumberConstructor;
        readonly pageCount: NumberConstructor;
        readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
        readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
        readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly small: BooleanConstructor;
        readonly background: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly hideOnSinglePage: BooleanConstructor;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:current-page': (val: number) => boolean;
        'update:page-size': (val: number) => boolean;
        'size-change': (val: number) => boolean;
        'current-change': (val: number) => boolean;
        'prev-click': (val: number) => boolean;
        'next-click': (val: number) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly total: NumberConstructor;
        readonly pageSize: NumberConstructor;
        readonly defaultPageSize: NumberConstructor;
        readonly currentPage: NumberConstructor;
        readonly defaultCurrentPage: NumberConstructor;
        readonly pageCount: NumberConstructor;
        readonly pagerCount: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
        readonly layout: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        readonly pageSizes: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => number[]) | (() => number[]) | ((new (...args: any[]) => number[]) | (() => number[]))[], unknown, unknown, () => [10, 20, 30, 40, 50, 100], boolean>;
        readonly popperClass: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly prevText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly prevIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly nextText: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly nextIcon: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
        readonly small: BooleanConstructor;
        readonly background: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly hideOnSinglePage: BooleanConstructor;
    }>> & {
        "onUpdate:current-page"?: ((val: number) => any) | undefined;
        "onUpdate:page-size"?: ((val: number) => any) | undefined;
        "onSize-change"?: ((val: number) => any) | undefined;
        "onCurrent-change"?: ((val: number) => any) | undefined;
        "onPrev-click"?: ((val: number) => any) | undefined;
        "onNext-click"?: ((val: number) => any) | undefined;
    }, {
        readonly small: boolean;
        readonly disabled: boolean;
        readonly popperClass: string;
        readonly layout: string;
        readonly background: boolean;
        readonly pagerCount: number;
        readonly pageSizes: number[];
        readonly prevText: string;
        readonly prevIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
        readonly nextText: string;
        readonly nextIcon: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>;
        readonly hideOnSinglePage: boolean;
    }>> & Record<string, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: null;
        required: false;
    };
    parentId: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
