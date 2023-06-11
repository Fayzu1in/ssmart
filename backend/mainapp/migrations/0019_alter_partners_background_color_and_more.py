# Generated by Django 4.2 on 2023-06-11 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0018_alter_partners_background_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partners',
            name='background_color',
            field=models.CharField(blank=True, choices=[('#ffffff', 'White'), ('grey', 'Grey'), ('#000000', 'Black')], default='#ffffff', max_length=255, null=True, verbose_name='Задний фон'),
        ),
        migrations.AlterField(
            model_name='product',
            name='os_type',
            field=models.CharField(blank=True, choices=[('webos', 'webos'), ('android', 'android')], max_length=100, verbose_name='Тип ОС'),
        ),
    ]
