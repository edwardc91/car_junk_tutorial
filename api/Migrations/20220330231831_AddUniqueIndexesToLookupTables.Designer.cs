﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using api;

namespace VehicleQuotes.Migrations
{
    [DbContext(typeof(VehicleQuotesContext))]
    [Migration("20220330231831_AddUniqueIndexesToLookupTables")]
    partial class AddUniqueIndexesToLookupTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("api.Models.BodyType", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Name")
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("ID")
                        .HasName("pk_body_types");

                    b.HasIndex("Name")
                        .IsUnique()
                        .HasDatabaseName("ix_body_types_name");

                    b.ToTable("body_types");
                });

            modelBuilder.Entity("api.Models.Make", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Name")
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("ID")
                        .HasName("pk_makes");

                    b.HasIndex("Name")
                        .IsUnique()
                        .HasDatabaseName("ix_makes_name");

                    b.ToTable("makes");
                });

            modelBuilder.Entity("api.Models.Size", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Name")
                        .HasColumnType("text")
                        .HasColumnName("name");

                    b.HasKey("ID")
                        .HasName("pk_sizes");

                    b.HasIndex("Name")
                        .IsUnique()
                        .HasDatabaseName("ix_sizes_name");

                    b.ToTable("sizes");
                });
#pragma warning restore 612, 618
        }
    }
}