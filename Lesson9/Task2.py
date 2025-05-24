# У Postman надішліть запит GET lists.
# Отриманий body збережіть у файл з назвою list.json і додайте його до вашого проєкту.
#
# Ваше завдання — зчитати файл lists.json, знайти всі об'єкти lists і вивести на екран їхні ID та name.
import json

with open('Lists.json', 'r') as json_file:
    body = json.load(json_file)
    list_of_objects = body['lists']
    for object_item in list_of_objects:
        print(f' object name is {object_item["name"]} \nobject ID is {object_item["id"]} \n')