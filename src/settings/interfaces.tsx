import { Dispatch, SetStateAction, Ref, CSSProperties, ReactNode } from 'react'

export interface FormInt {
	id?: string //id поля из формика
	name?: string //name поля из формика
	form?: {
		// объект формы
		errors: object
		touched: object
		handleChange: any
		values: any
		validateForm: any
	}
	error?: boolean //Показать ошибку в компоненте
}

export interface InputDefault {
	placeholder?: string | null //Placeholder инпута
	border?: boolean //Показать border
	disabled?: boolean //Выключить инпут
	label?: string | null //Лейбл
	callback?: () => any //callback
	inputChange?: Dispatch<SetStateAction<any>> //callback для setState
}

export interface MainLayoutInt {
	children: JSX.Element
	title?: string //seo title
	description?: string //seo description
	enableFooter?: boolean
}

export interface TabsInt {
	tabsLabelList: Array<string> //Массив названий табов
	active?: number //index активного таба
	callback: (activeIndex: number) => void
}

export interface StylesClassInt {
	className?: string //Доп класс
	style?: CSSProperties | undefined //Доп стили
}

export type DAS_symbols = '.' | '/' | '-'

export type ButtonSizeTypes = 'small' | 'middle' | 'large' | 'xlarge'
export type ButtonModeTypes = 'button' | 'link'
export interface ButtonInt extends StylesClassInt {
	type?: any //Тип
	text?: string | null //Текст
	size?: ButtonSizeTypes //Размер
	border?: boolean //Включить border
	background?: boolean //Включить background
	invert?: boolean // Инвертировать цвета
	disabled?: boolean //Отключить кнопку
	insertElement?: JSX.Element //Вставить ноду в кнопку
	callback?: () => void //callback при нажатии
	mode?: ButtonModeTypes
	path?: string
}

export type CheckboxEnum = //Типы чебоксов
	'checkbox' | 'switch'

export type SelectStateInt = string | number | undefined

//Типы dropdown
type dropdownTypes =
	| 'select' //Select
	| 'dropdown' //Dropdown
	| 'multi' //Multi select
export interface dropdownInt extends StylesClassInt {
	children?: JSX.Element
	type?: dropdownTypes //Тип dropdown
	value?: string | number //Название выбора в шапке компонента
	label?: string | null //Лейбл компонента
}
export interface SelectInt extends dropdownInt, FormInt {
	items: object, //Объект со значениями
	id: string, //id поля из формика
	name: string, //name поля из формика
	except?: boolean, //Исключить выбранный элемент из общего списка элементов
	selectedItemKey?: string | number | undefined, //Ключ выбранного по дефолту элемента
	callback?: (item: string | number) => void
}

export interface CheckboxInt extends FormInt {
	label?: string //label для чекбокса
	mode?: CheckboxEnum //Тип чекбокса
	checked?: boolean //checked
	callback?: () => any //callback, выполняется если не указана форма
	inputChange?: Dispatch<SetStateAction<any>> //callback выполняется, если передан setState
}

export type InputEnum = 'text' | 'password' | 'search' | 'limit'
export interface InputInt extends FormInt, InputDefault, StylesClassInt {
	type: InputEnum //Тип кнопки: text, password, search, limit
	value?: string //Значение
	limit?: number //Лимит символов
	label?: string | null
}

export interface InputMaskInt extends FormInt, InputDefault {
	value: string //Значение
	mask: any //Маска ввода
}

export interface FileInputInt extends FormInt {
	accept: string //Допустимые типы файлов для выбора. Вводить mime-типы для валидации
	multiple?: boolean //Включить мультивыбор
	text?: string //Текст кнопки
	id: string //id поля из формика
	name: string //name поля из формика
	disabled?: boolean
	form: {
		// объект формы
		errors: object
		touched: object
		handleChange: any
		values: any
		validateForm: any
	}
}

export type MenuDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface MenuInt<T> {
	direction?: MenuDirections
	menuConfig?: Array<T>
}

export interface MenuItemInt {
	label: string //Название пункта меню
	path: string //Путь
}

export interface FileInputListInt<T> {
	formValues: Array<T> //Массив элементов
}

export interface PhotoInputInt {
	id: string //id поля из формика
	name: string //name поля из формика
	form: {
		errors: object
		touched: object
		handleChange: any
		values: any
		validateForm: any
	}
	error?: boolean //Показывать ошибки
	outputHeight?: number //Высота выходного файла картинки
	outputWidth?: number //Ширина выходного файла картинки
	canvasHeight?: number | string //Высота canvas
	canvasWidth?: number | string //Ширина canvas
}


export type CustomPlacesType = 'top' | 'right' | 'bottom' | 'left'

export type CustomVariantType =
	| 'dark'
	| 'light'
	| 'success'
	| 'warning'
	| 'error'
	| 'info'

export interface CustomTooltipInt {
	children: JSX.Element
	tooltipInner: JSX.Element | string //Компонент или текст для вывода в tooltip
	id: string //id для связки контейнера с tooltip компонентом
	variant?: CustomVariantType //Вариант tooltip
	place?: CustomPlacesType //Положение tooltip
	clickable?: boolean //Кликабельность tooltip
}

export interface ErrorBoxInt extends FormInt {
	error: boolean //Показать ошибку в компоненте
}

export interface ScrollbarInt {
	children: JSX.Element
}

export interface CircleProgressbarInt {
	percents: number //Проценты
	text?: string //Текст
}

export type PaginationTypes = 'circle' | 'square'
export interface PaginationBarInt {
	paginationState: [number, Dispatch<SetStateAction<number>>] //[state, setState] - активная пагинация и сеттер
	itemCount: number //Кол-во элементов, всего
	maxItems?: number //Максимальное кол-во элементов на странице пагинации
	customPaginationCount?: number // Кол-во элементов пагинации в тулбаре
	type?: PaginationTypes //Тип кнопок пагинации
}

export type HorizontalSelfPosition = 'flex-start' | 'center' | 'flex-end'
export interface PaginationInt<T> {
	itemsList: Array<T> //Массив элементов
	maxItemsView?: number //Максимальное кол-во элементов для вывода на страницу
	type?: PaginationTypes //Тип кнопок
	customPaginationCount?: number //Кол-во кнопок пагинации
	style?: object //Объект стилей для контейнера
	barPosition?: HorizontalSelfPosition //Позиция контейнера с пагинацией
	renderFn: (item: any, index?: number) => any //callback для рендера элементов
}

export interface AccordionInt {
	children: JSX.Element
	title: string //Тайтл
	open?: boolean //Открыт ли по дефолту аккордеон
	// setOpen?: Dispatch<SetStateAction<boolean>>, //setState
	badge?: string //badge
	innerOpen?: boolean
}

export interface CopyrightInt {
	startYear?: number //Стартовая дата
	info?: string //Текст для copyrigth
}

export interface RequestInt {
	method?: string //Метод запроса
	url: string //endpoint запроса
	data?: object | string //Данные запроса
	hasToken?: boolean //Добавить токен в хедеры
	formEnable?: boolean //Включить отправку formData
	checkData?: boolean //Вывести в консоль response
	checkHeaders?: boolean //Вывести в консоль headers
	getStatus?: boolean //Получить статус запроса
	getData?: boolean //Получить данные запроса
	getAll?: boolean //Получить данные и статус запроса
}

export interface PostFormInt {
	url: string //endpoint запроса
	data: BodyInit //Данные запроса
	formEnable?: boolean //Включить отправку formData
	hasToken: boolean //Добавить токен в хедеры
}

export interface ResizeSvgInt {
	className: string
	style?: CSSProperties
	children: JSX.Element
}

export interface BreadcrumbsInt<T> {
	list: Array<T>
}
export interface BreadcrumbsItemInt {
	title: string
	link: string
	active: boolean
	index: number
}

export interface DasInfiniteScrollInt {
	children: JSX.Element
	maxItemsLenght: number
	getNextItems: () => void
	itemsListLength: number
	scrollRef?: any
	endMessage?: JSX.Element
}
export interface OverlayInt {
	children: ReactNode
	isOpenPopup: boolean
	closePopup?: () => void
}

export interface HeaderInt {
	sticky?: boolean,
}

export interface metriksInt {
	script: string
}