<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $queryUrl = 'https://gpro.bitrix24.ru/rest/40/fg5wdecoksfchwgx/crm.lead.add.json';
    $idToDel = $_POST["data"];
    $queryData = '';

    $arrRequest = json_decode($idToDel, true);

    if (!empty($arrRequest)) {
        switch ($arrRequest['type']) {
            case 'order-callback':
                $queryData = array(
                    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
                    'key'     => 'ODczNDM6NjgyMjI6M2Q1ZjhkNTllMWE3ZmI4YTY5ZDQ5ZWQzYzNiN2E2Njg', // API-ключ для интеграции с CRM, указывается в настройках интеграции с CRM.
                    'title'   => $arrRequest['name'],
                    'name'    => $arrRequest['name'],
                    'phone'   => $arrRequest['phone'],
                    'sync'    => '0', //
                    'is_need_check_order_in_processing' => '1', // Включение проверки заявок на дубли
                    'is_need_check_order_in_processing_append' => '1', // Если создана дублирующая заявка, в нее будет добавлен комментарий об этом
                    'fields'  => array(
                        "ASSIGNED_BY_ID" => 40,
                        "SOURCE_DESCRIPTION" =>'Лендинг "Упаковка бизнеса" - заказ обратного звонка',
                        "SOURCE_ID" => 'Лендинг_Упаковка_Бизнеса',
                    ),
                );
                file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($queryData));
                echo json_encode(["response" => true]);
                break;
            case 'order-landing':
                $queryData = array(
                    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
                    'key'     => 'ODczNDM6NjgyMjI6M2Q1ZjhkNTllMWE3ZmI4YTY5ZDQ5ZWQzYzNiN2E2Njg', // API-ключ для интеграции с CRM, указывается в настройках интеграции с CRM.
                    'title'   => $arrRequest['name'],
                    'name'    => $arrRequest['name'],
                    'phone'   => $arrRequest['phone'],
                    'sync'    => '0', //
                    'is_need_check_order_in_processing' => '1', // Включение проверки заявок на дубли
                    'is_need_check_order_in_processing_append' => '1', // Если создана дублирующая заявка, в нее будет добавлен комментарий об этом
                    'fields'  => array(
                        "ASSIGNED_BY_ID" => 40,
                        "SOURCE_DESCRIPTION" =>'Лендинг "Упаковка бизнеса" - заказ лендинга',
                        "SOURCE_ID" => 'Лендинг_Упаковка_Бизнеса',
                    ),
                );
                file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($queryData));
                echo json_encode(["response" => true]);
                break;
        }
    } else {
        echo json_encode(["response" => false]);
    }
}
