# Generated by Django 4.2 on 2023-06-01 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0014_alter_partners_background_color'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='dealerrequest',
            options={'verbose_name': 'Заявка дилера', 'verbose_name_plural': 'Заявки дилеров'},
        ),
        migrations.RemoveField(
            model_name='product',
            name='character',
        ),
        migrations.RemoveField(
            model_name='product',
            name='descripton',
        ),
        migrations.RemoveField(
            model_name='product',
            name='image1',
        ),
        migrations.RemoveField(
            model_name='product',
            name='image2',
        ),
        migrations.RemoveField(
            model_name='product',
            name='os',
        ),
        migrations.RemoveField(
            model_name='product',
            name='os_info',
        ),
        migrations.RemoveField(
            model_name='product',
            name='status',
        ),
        migrations.AddField(
            model_name='product',
            name='ac',
            field=models.CharField(blank=True, max_length=255, verbose_name='Блок питания'),
        ),
        migrations.AddField(
            model_name='product',
            name='brightness',
            field=models.CharField(blank=True, max_length=255, verbose_name='Яркость'),
        ),
        migrations.AddField(
            model_name='product',
            name='contrast',
            field=models.CharField(blank=True, max_length=255, verbose_name='Контраст'),
        ),
        migrations.AddField(
            model_name='product',
            name='display',
            field=models.CharField(blank=True, max_length=255, verbose_name='Экран'),
        ),
        migrations.AddField(
            model_name='product',
            name='new',
            field=models.BooleanField(default=True, verbose_name='Новый'),
        ),
        migrations.AddField(
            model_name='product',
            name='os_type',
            field=models.CharField(blank=True, choices=[('webos', 'webos'), ('android', 'android')], max_length=100, verbose_name='Тип ОС'),
        ),
        migrations.AddField(
            model_name='product',
            name='picture',
            field=models.ImageField(null=True, upload_to='pictures/products', verbose_name='Картинка'),
        ),
        migrations.AddField(
            model_name='product',
            name='ram',
            field=models.CharField(blank=True, max_length=255, verbose_name='RAM/DDR'),
        ),
        migrations.AddField(
            model_name='product',
            name='resolution',
            field=models.CharField(blank=True, max_length=255, verbose_name='Разрешение'),
        ),
        migrations.AddField(
            model_name='product',
            name='system',
            field=models.CharField(blank=True, max_length=255, verbose_name='Система'),
        ),
        migrations.AddField(
            model_name='product',
            name='tech',
            field=models.CharField(blank=True, max_length=255, verbose_name='Технологии'),
        ),
        migrations.AddField(
            model_name='product',
            name='voice',
            field=models.CharField(blank=True, max_length=255, verbose_name='Звук'),
        ),
        migrations.AddField(
            model_name='product',
            name='voice_control',
            field=models.BooleanField(default=False, verbose_name='Голосовое управление'),
        ),
        migrations.AddField(
            model_name='product',
            name='wifi',
            field=models.CharField(blank=True, max_length=255, verbose_name='Wi-Fi/Bluetooth'),
        ),
        migrations.AlterField(
            model_name='partners',
            name='background_color',
            field=models.CharField(blank=True, choices=[('grey', 'Grey'), ('#ffffff', 'White'), ('#000000', 'Black')], default='#ffffff', max_length=255, null=True, verbose_name='Задний фон'),
        ),
        migrations.AlterField(
            model_name='product',
            name='is_published',
            field=models.BooleanField(default=False, verbose_name='Опубликован'),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(blank=True, max_length=100, verbose_name='Цена'),
        ),
    ]
